/**
 * Created by huweijian on 2016/12/8.
 * @title 合并所有reducer
 */
import constValue from '../constValue/constValue'

//引入redux提供的合并方法
import {combineReducers} from 'redux';
//引入编辑列表reducer
import lists from './editReducer';
//引入显示reducer
import todoShow from './showReducer';

// function todos(state = [], action) {
//     switch (action.type){
//         case constValue.TODO_MVC_ADD:
//             return [
//                 ...state,
//                 {
//                     text: action.text,
//                     completed: false
//                 }
//             ];
//         default:
//             return state
//     }
// }


//初始化合并后的reducer
const todoApp = combineReducers({
        lists,
        todoShow
});
//出书todoApp
export default todoApp ;