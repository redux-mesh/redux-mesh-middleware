import {Action, Store} from 'redux';

export const reduxMesh = (store: Store<any>) => (next) => (action: Action) => {
    console.log("Middleware triggered:", action);
    next(action);
};