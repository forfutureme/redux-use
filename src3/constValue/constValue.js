/**
 * Created by huweijian on 2016/12/8.
 * @title 合并所有常量
 */
//引入编辑常量
import edit from './editConst';
//引入显示常量
import show from './showConst';
//引入其他常量
import other from './otherConst';

//组合各种常量并输出
export default Object.assign({}, edit, show, other);
