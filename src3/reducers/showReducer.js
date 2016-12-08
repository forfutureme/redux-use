/**
 * Created by huweijian on 2016/12/8.
 * @title 设置显示列表reducer
 */
//引入常量
import constValue from '../constValue/constValue';

/**
 * 创建并输出显示列表方法
 * @param state
 * @param action
 * @returns {*}
 */
export default function todoShow(state = constValue.TODO_SHOW_ALL, action) {
    switch (action.type) {
        case constValue.TODO_SET_VISIBILITY:
            return action.filter;
        default:
            return state
    }
}
