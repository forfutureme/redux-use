/**
 * Created by huweijian on 2016/12/8.
 * @title 编辑action
 * 创建编辑todo列表需要用到的action
 */
//引入常量
import actionType from '../constValue/editConst';

/**
 * 创建并输出添加item方法
 * @param text
 * @returns {{type: string, text: *}}
 */
export function addTodo(text) {
    return {
        type: actionType.TODO_MVC_ADD,
        text
    }
}

/**
 * 创建并输出删除item方法
 * @param index
 * @returns {{type: string, index: *}}
 */
export function deleteTodo(index) {
    return {
        type: actionType.TODO_MVC_DELETE,
        index
    }
}

/**
 * 创建并输出完成item方法
 * @param index
 * @returns {{type: string, index: *}}
 */
export function completeTodo(index) {
    return {
        type: actionType.TODO_MVC_COMPLETED,
        index
    }
}





