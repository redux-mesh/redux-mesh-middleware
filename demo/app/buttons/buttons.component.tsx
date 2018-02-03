import * as React from 'react';
import {ButtonsState} from './buttons.state';

interface Props {
    buttons: ButtonsState;

    button1Click();

    button2Click();
}

export class ButtonsComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);

        this.button1Click = this.button1Click.bind(this);
        this.button2Click = this.button2Click.bind(this);
    }

    button1Click() {
        this.props.button1Click();
    }

    button2Click() {
        this.props.button2Click();
    }

    render() {
        return (
            <div>
                <button disabled={!this.props.buttons.enableButton1} onClick={this.button1Click}>Button 1</button>
                <button disabled={!this.props.buttons.enableButton2} onClick={this.button2Click}>Button 2</button>
            </div>
        );
    }
}