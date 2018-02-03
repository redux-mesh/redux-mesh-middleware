import * as React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import {configureStore} from './store';
import ButtonsContainer from './buttons/buttons.container';

const store = configureStore({});

render(
    <div>
        <Provider store={store}>
            <ButtonsContainer/>
        </Provider>
    </div>,
    document.getElementById('root')
);