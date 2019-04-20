import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';

class App extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    addNumFun() {
        const number = Number(this.refs.inputNum.value);
        this.props.actions.addAsNumFun(number);
        this.refs.inputNum.value = '';
    }
    render() {
        return (
            <div>
                <p>{this.props.num}</p>
                <button onClick={this.props.actions.addFun}>+++</button>
                {' '}
                <button onClick={this.props.actions.minusFun}>---</button>
                {' '}
                <input type='text' placeholder='Please input a number' ref='inputNum' />
                {' '}
                <button onClick={this.addNumFun.bind(this)}>Add as input num </button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators(actions, dispatch) };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);