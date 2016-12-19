/**
 * Created by huweijian on 2016/12/16.
 * @title
 */
import React, { Component, PropTypes } from 'react';
import Todo from '../todo/todo';

export default class TodoList extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const {items} = this.props;
        const { ulStyle } = this.getStyle();
        return(
            <ul style={ulStyle}>
                {
                    items.map((item, index) =>
                       <Todo
                           {...item}
                           key={index}
                           index={index} />
                    )
                }
            </ul>
        )
    }
    getStyle(){
        return {
            ulStyle: {
                display: 'flex',
                width: 300,
                margin: '25px auto',
                flexWrap: 'wrap'
            }
        }
    }
}