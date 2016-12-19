/**
 * Created by huweijian on 2016/12/16.
 * @title
 */
import React, { Component, PropTypes } from 'react';
import * as actions from '../../actions/actions';

export default class Todo extends Component {
    constructor(props, context){
        super(props, context);
        const { store } =  this.context;
        this.dispatch = store.dispatch;
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(index){
        this.dispatch(actions.completedItem(index));
    }
    render(){
        const {text, index, completed} = this.props;
        return(
            <li data-index={index}
                style={{
                    textDecoration: completed ? 'line-through' : 'none',
                    cursor: completed ? 'text' : 'pointer',
                    width: '100%'
                }}
                onClick={() => this.handleClick(index)}>
                {text}
            </li>
        )
    }

}

Todo.contextTypes = {
    store: React.PropTypes.object,
    dispatch: React.PropTypes.func
};
