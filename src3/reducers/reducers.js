/**
 * Created by huweijian on 2016/12/8.
 * @title 合并所有reducer
 */
//引入redux提供的合并方法
import {combineReducers} from 'redux';
//引入编辑列表reducer
import todos from './editReducer';
//引入显示reducer
import todoShow from './showReducer';

//初始化合并后的reducer
const todoApp = combineReducers(
    todos,
    todoShow
);
//出书todoApp
export default todoApp ;