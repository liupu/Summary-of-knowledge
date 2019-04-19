import React, { Component } from 'react';

export default class App extends Component{
    constructor(props){
        super(props)
    }
    addAsNum(){
        const inputNum = Number(this.refs.inputNum.value);
        this.props.addAsNumFun(inputNum);
        this.refs.inputNum.value = '';
    }
    render(){
        return(
            <div>
                <p>{this.props.value}</p>
                <button onClick={this.props.addFun}>+++</button>
                {" "}
                <button onClick={this.props.minusFun}>---</button>
                {" "}
                <input type='text' placeholder='Please input a number' ref='inputNum'/>
                {" "}
                <button onClick={this.addAsNum.bind(this)}>Add the number</button>
            </div>
        )
    }
}