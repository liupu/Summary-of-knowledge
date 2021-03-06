import React, { Component } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    addAsNum(){
        const { addAsNum } = this.props.actions;
        const inputNum = Number(this.refs.inputNum.value);
        addAsNum(inputNum);
        this.refs.inputNum.value = '';
    }
    render(){
        const { addFun, minusFun } = this.props.actions;
        return(
            <div>
                <p>{this.props.num}</p>
                <input type='button' value='+++' onClick={ addFun } id='add'/>
                {' '}
                <input type='button' value='---' onClick={ minusFun } id='minus'/>
                {' '}
                <input type='text' placeholder='Please input a number' ref='inputNum'/>
                {' '}
                <input type='button' value='Add a number' onClick={this.addAsNum.bind(this)}/>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return state;
}
const mapDispatchToProps = (dispatch) => {
    return {actions:bindActionCreators(actions,dispatch)};
}
export default connect(mapStateToProps,mapDispatchToProps)(App);