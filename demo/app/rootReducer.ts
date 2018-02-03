import {combineReducers} from 'redux';
import {buttonsReducer as buttons} from './buttons/buttons.reducer';

export const rootReducer = combineReducers({
    buttons
});