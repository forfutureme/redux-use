/**
 * Created by huweijian on 2016/12/16.
 * @title list
 */
import React, { Component, PropTypes } from 'react';
import Todo from '../todo/todo';

/**
 * 定义输出list
 */
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

    /**
     * 返回样式
     * @returns {{ulStyle: {display: string, width: number, margin: string, flexWrap: string}}}
     */
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