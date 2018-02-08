import {applyMiddleware, compose, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import {rootReducer} from './rootReducer';
import {reduxMesh} from '../../index';

const logger = createLogger({
    collapsed: false
});

const enhancer = compose(applyMiddleware(logger, reduxMesh({token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIzZWUwNjRlMC1mZTBlLTExZTctOGRkYS1jNzdmNjg0ZmU2YzciLCJhcHBJZCI6ImJlMGEzMWEwLTA5ZTUtMTFlOC04Y2FlLTM3YWVlZGY4MzUxZCIsImlhdCI6MTUxNzc3NTY4OSwiZXhwIjoxNTQ5MzExNjg5fQ.bzmsEhtp403f2UPUSDmjs_cYXbZ7wgtsI0cjSK9WWkg'})));

export function configureStore(initialState) {
    return createStore(rootReducer, initialState, enhancer);
}