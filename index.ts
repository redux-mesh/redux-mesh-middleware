import {Middleware, Store} from 'redux';
import {IOptions} from './lib/IOptions';
import {IEvent} from './lib/IEvent';
import {request} from './lib/request';
import {ISession} from './lib/ISession';

export const reduxMesh = (options: IOptions): Middleware => {

    const url = options.url ? options.url : 'http://localhost:3000';
    let session: ISession;

    try {
        (async () => {
            session = await request.createSession(url, options.token);
        })();
    } catch (ex) {
        console.error(ex);
    }

    const mesh: Middleware = (store: Store<any>) => (next) => (action) => {
        const timestamp: number = new Date().getTime();
        const eventType: string = action.type;

        const event: IEvent = {timestamp, sessionId: session.id, eventType, event: action, store: store.getState()};

        if (session) {
            request.sendEvent(url, options.token, event);
        }

        return next(action);
    };

    return mesh;
};