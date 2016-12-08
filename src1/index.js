/**
 * Created by huweijian on 2016/12/5.
 * @title
 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';

/**
 * 创建显示内容
 * @param value
 * @constructor
 */
const Counter = ({value}) => (
    <div>
        <h1>{value}</h1>
        <button onClick={this.props.onIncrement}>+</button>
        <button onClick={this.props.onDecrement}>-</button>
    </div>
);


class App extends Component {
    render() {
        // Injected by connect() call:
        console.log(this.context);
        const {state, dispatch} = this.props;
        return (
            <div>
                <h1>{state}</h1>
                <button onClick={() => dispatch({type: 'INCREMENT'})}>+</button>
                <button onClick={() => dispatch({type: 'DECREMENT'})}>-</button>
            </div>
        )
    }
}

/**
 * 新建reducer
 * @param state
 * @param action
 * @returns {number}
 */
const reducer = (state = 0, action) => {
    const {type} = action;
    switch (type){
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        default : return state
    }
};

const store = createStore(reducer);
function select(state) {
    return {state};
}

const Run = connect(select)(App);



render(
    <Provider store={store}>
        <Run/>
    </Provider>
    ,
    document.getElementById('container')
)
//store.subscribe(renderDom);