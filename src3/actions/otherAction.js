/**
 * Created by huweijian on 2016/12/8.
 * @title 其他action
 */
//引入常量
import constValue from '../constValue/constValue';

/**
 * 创建并输出其他action方法
 * @param msg
 * @returns {{type: string, msg: *}}
 */
export function other(msg) {
    return {
        type: constValue.TODO_OTHER,
        msg
    }
}
