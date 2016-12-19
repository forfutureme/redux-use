/**
 * Created by huweijian on 2016/12/15.
 * @title 首页App
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/actions';
import constants from '../constants/constants';
import Header from '../component/header/header';
import InputBox from '../component/input/input';
import TodoList from '../component/todoList/todoList';
import ShowListBar from '../component/showlistBar/showListBar';

/**
 * 创建App组件
 */
class App extends Component {
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props);
        let { items, filterType} = this.props;
        return (
            <div>
                <Header title="Todo MVC"/>
                <InputBox/>
                <TodoList items={items}/>
                <ShowListBar filterType={filterType}/>
            </div>
        )
    }
}

/**
 *
 * @param state
 * @returns {*}
 */
function filterItem(state) {
    switch (state.showItem){
        case constants.SRC5_SHOW_ALL:
            return state.items;
        case constants.SRC5_SHOW_COMPLETED:
            return state.items.filter(item => item.completed);
        case constants.SRC5_SHOW_NOT_COMPLETED:
            return state.items.filter(item => !item.completed);
        default:
            return state.items;
    }
}

/**
 * 返回对应值
 * @param state
 * @returns {{value}}
 */
function mapStateToProps(state) {
    return {
        items: filterItem(state),
        filterType: state.showItem
    }
}

export default connect(mapStateToProps)(App);

