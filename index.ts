import {Middleware, Store} from 'redux';
import {IOptions} from './lib/IOptions';
import {utils} from './lib/utils';
import {IEvent} from './lib/IEvent';
import {request} from './lib/request';

export const reduxMesh = (options: IOptions): Middleware => {

    const sessionId = utils.generateSessionId();
    const url = options.url ? options.url : 'http://localhost:3000/api/events';

    const mesh: Middleware = (store: Store<any>) => (next) => (action) => {

        const timestamp: number = new Date().getTime();
        const eventType: string = action.type;

        const event: IEvent = {timestamp, sessionId, eventType, event: action, store: store.getState()};

        request.post(url, options.token, event);

        return next(action);
    };

    return mesh;
};