/**
 * Created by huweijian on 2016/12/8.
 * @title 编辑reducer
 */
//引入常量
import constValue from '../constValue/constValue';

/**
 * 创建并输出编辑reducer
 * @param state
 * @param action
 * @returns {*}
 */
export default function todos(state = [], action) {
    // //编辑方法对象
    // let todoMap = {
    //     [constValue.TODO_MVC_ADD](){
    //
    //     },
    //     [constValue.TODO_MVC_COMPLETED](){
    //
    //     },
    //     [constValue.TODO_MVC_DELETE](){
    //
    //     },
    //     defaultFun(){
    //         return state;
    //     }
    // };
    // //查表法匹配对应type并执行，如果匹配不到执行默认方法
    // todoMap[action.type] ? todoMap[action.type]() : todoMap['defaultFun']();
    switch (action.type){
        case constValue.TODO_MVC_ADD:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
        case constValue.TODO_MVC_COMPLETED:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    completed: true
                }),
                ...state.slice(action.index + 1)
            ];
        case constValue.TODO_MVC_DELETE:
            return [...state.splice(action.index, 1)]
        default:
            return state
    }
}

