/**
 * Created by huweijian on 2016/12/16.
 * @title 输入框 inputBox
 */
import React, { Component, PropTypes } from 'react';
import * as actions from '../../actions/actions';
import constants from '../../constants/constants';

/**
 * 创建输入框组件
 */
export default class InputBox extends Component {
    constructor(props, context){
        super(props,context);
        const {store} = this.context;
        this.dispatch = store.dispatch;
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.state = {
            error: ''
        };
    }
    /**
     * click事件监听
     */
    handleClick(){
        this.toAddItem();
    }

    /**
     * 按键事件监听
     * @param event
     * @returns {boolean}
     */
    handleKeyDown(event){
        if (event.keyCode != 13){
            return false;
        }
        this.toAddItem();
    }

    /**
     * 新增item方法
     */
    toAddItem(){
        let input = this.refs.input;
        let text = input.value.trim();
        if (text !== ''){
            this.dispatch(actions.addItem({
                text,
                timeAt: Date.now()
            }));
            input.value = '';
            this.setState({
                error: ''
            });
            this.dispatch(actions.showItem(constants.SRC5_SHOW_ALL));
            const {store} = this.context;
            console.log(store.getState());

        } else {
            this.setState({
                error: '请先输入要添加的内容'
            });
        }
    }
    render(){
        let {inputBoxStyle, inputStyle, buttonStyle, spanStyle} = this.getStyle();
        return (
            <div style={inputBoxStyle}>
                <input style={inputStyle} ref="input" onKeyDown={this.handleKeyDown}/>
                <button style={buttonStyle} onClick={this.handleClick}>新增</button>
                <span style={spanStyle}>{this.state.error}</span>
            </div>
        )
    }

    /**
     * 样式
     * @returns {{inputBoxStyle: {display: string, height: number, alignItems: string, justifyContent: string}, inputStyle: {width: number, height: number, marginRight: number, padding: string, border: string, borderRadius: number, fontSize: number, color: string, outline: string}, buttonStyle: {display: string, alignItems: string, justifyContent: string, width: string, height: string, marginRight: number, cursor: string, border: number, borderRadius: number, background: string, color: string, fontSize: number, outline: string}, spanStyle: {fontSize: number, color: string}}}
     */
    getStyle(){
        return {
            inputBoxStyle: {
                display: 'flex',
                height: 60,
                alignItems: 'center',
                justifyContent: 'center'
            },
            inputStyle: {
                width: 150,
                height: 30,
                marginRight: 10,
                padding: '0 5px',
                border: '1px solid #ddd',
                borderRadius: 5,
                fontSize: 12,
                color: '#666',
                outline: 'none'
            },
            buttonStyle: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '60px',
                height: '36px',
                marginRight: 10,
                cursor: 'pointer',
                border: 0,
                borderRadius: 5,
                background: 'bisque',
                color: '#333',
                fontSize: 14,
                outline: 'none'
            },
            spanStyle: {
                fontSize: 10,
                color: 'red'
            }
        }
    }
}

/**
 * 获取store 和 dispatch
 * @type {{store: __React.Requireable<any>, dispatch: __React.Requireable<any>}}
 */
InputBox.contextTypes = {
    store: React.PropTypes.object,
    dispatch: React.PropTypes.func
};