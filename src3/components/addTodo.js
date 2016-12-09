/**
 * Created by huweijian on 2016/12/9.
 * @title 展示组件，添加新item
 */
import React, {Component, PropTypes} from 'react';
import actions from '../actions/actions';

export default class AddTodo extends Component {
    handleClick(e){
        //获取绑定在组件上的context
        const {store} = this.context;
        const dispatch = store.dispatch;
        const input = this.refs.input;
        const text = input.value.trim();
        // this.props.onAddClick(text);
        dispatch(actions.addTodo(text));
        input.value = '';

    }
    handleKeyDown(e){
        const input = this.refs.input;
        if (e.keyCode == 13 && input.value.trim() !== ''){
            this.handleClick()
        }
    }
    render(){
        return (
            <div>
                <input type="text" ref="input" onKeyDown={(e) => this.handleKeyDown(e)}/>
                <button onClick={(e) => this.handleClick(e)}>新增</button>
            </div>
        )
    }
}

AddTodo.contextTypes = {
    store: React.PropTypes.object,
    dispatch: React.PropTypes.func
};


