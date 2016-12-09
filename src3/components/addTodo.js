/**
 * Created by huweijian on 2016/12/9.
 * @title 展示组件，添加新item
 */
import React, {Component, PropTypes} from 'react';

export default class AddTodo extends Component {
    handleClick(e){
        const input = this.refs.input;
        const text = input.value.trim();
        this.props.onAddClick(text);
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

AddTodo.PropTypes = {
    onAddClick: PropTypes.func.isRequired
};


