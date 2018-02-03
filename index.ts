import {Action, Middleware, Store} from 'redux';

export const reduxMesh: Middleware = (store: Store<any>) => (next) => (action) => {
    console.log(action);
    return next(action);
};