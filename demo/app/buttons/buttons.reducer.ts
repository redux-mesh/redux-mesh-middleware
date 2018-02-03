import {ButtonsState, buttonState} from './buttons.state';
import {BUTTON_1_CLICK, BUTTON_2_CLICK} from './buttons.action-types';

export const buttonsReducer = (state: ButtonsState = buttonState, action): ButtonsState => {
    switch (action.type) {
        case BUTTON_1_CLICK:
            return {...state, enableButton1: false, enableButton2: true};
        case BUTTON_2_CLICK:
            return {...state, enableButton1: true, enableButton2: false};
        default:
            return state;
    }
};