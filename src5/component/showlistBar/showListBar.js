/**
 * Created by huweijian on 2016/12/16.
 * @title 切换显示分类
 */
import React, { Component, PropTypes } from 'react';
import * as actions from '../../actions/actions';
import constants from '../../constants/constants';

/**
 * 初始化并输出选择分类bar
 */
export default class ShowListBar extends Component {
    constructor(props, context){
        super(props, context);
        const { store } = this.context;
        this.dispatch = store.dispatch;
        this.getFilterBtn = this.getFilterBtn.bind(this);
    }
    getFilterBtn(filter){
        this.dispatch(actions.showItem(filter));
    }
    render(){
        const { store } = this.context;
        const { showItem } = store.getState();
        const { aStyle } = this.getStyle();
        return(
            <div>
                <label>筛选显示：</label>
                { showItem === constants.SRC5_SHOW_ALL
                    ? '全部'
                    : <a style={aStyle} onClick={ () => {this.getFilterBtn(constants.SRC5_SHOW_ALL)}}>全部</a>}
                {' ，'}
                { showItem === constants.SRC5_SHOW_COMPLETED
                    ? '已完成'
                    : <a style={aStyle} onClick={ () => { this.getFilterBtn(constants.SRC5_SHOW_COMPLETED) }}>已完成</a>}
                {' ，'}
                { showItem === constants.SRC5_SHOW_NOT_COMPLETED
                    ? '未完成'
                    : <a style={aStyle} onClick={ () => {this.getFilterBtn(constants.SRC5_SHOW_NOT_COMPLETED)}}>未完成</a>}
            </div>
        )
    }

    /**
     * 样式
     * @returns {{aStyle: {color: string, textDecoration: string}}}
     */
    getStyle(){
        return {
            aStyle: {
                color: 'blue',
                textDecoration: 'underline'
            }
        }
    }
}

/**
 * 获取store 和 dispatch
 * @type {{store: __React.Requireable<any>, dispatch: __React.Requireable<any>}}
 */
ShowListBar.contextTypes = {
    store: React.PropTypes.object,
    dispatch: React.PropTypes.func
};

