import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ButtonsComponent} from './buttons.component';
import {ButtonsState} from './buttons.state';
import * as actions from './buttons.actions';

interface Props {
    buttons: ButtonsState;
    actions: Actions;
}

interface Actions {
    button1Click();

    button2Click();
}

const ButtonsContainer: React.StatelessComponent<Props> = (props) => {
    return (
        <ButtonsComponent buttons={props.buttons}
                          button1Click={props.actions.button1Click}
                          button2Click={props.actions.button2Click}/>
    );
};

function mapStateToProps(state) {
    return {
        buttons: state.buttons
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions}, dispatch)
    };
}

export default connect<{}, {}, any>(
    mapStateToProps,
    mapDispatchToProps
)(ButtonsContainer);