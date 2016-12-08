/**
 * Created by huweijian on 2016/12/8.
 * @title actions
 * 把所有action组合在这个文件里
 */
//引入编辑action
import * as edit from './editAction';
//引入其他action
import * as other from './otherAction';

//组合各种action并输出
export default Object.assign({}, edit, other);
