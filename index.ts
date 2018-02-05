import {Middleware, Store} from 'redux';
import {IOptions} from './lib/IOptions';
import {utils} from './lib/utils';

export const reduxMesh = (options: IOptions): Middleware => {

    const sessionId = utils.generateSessionId();

    const mesh: Middleware = (store: Store<any>) => (next) => (action) => {

        const timestamp = new Date().getTime();
        const eventType = action.type;
        const event = action;

        const body = {
            timestamp,
            sessionId,
            eventType,
            event,
            store: store.getState()
        };

        return next(action);
    };

    return mesh;
};