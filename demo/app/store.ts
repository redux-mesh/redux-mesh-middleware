import {applyMiddleware, compose, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import {rootReducer} from './rootReducer';

const logger = createLogger({
    collapsed: false
});

const enhancer = compose(applyMiddleware(logger));

export function configureStore(initialState) {
    return createStore(rootReducer, initialState, enhancer);
}