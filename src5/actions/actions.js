/**
 * Created by huweijian on 2016/12/15.
 * @title
 */
import constants from '../constants/constants';
import { createAction } from 'redux-actions';

//创建并输出新增item，action
export const addItem = createAction(constants.SRC5_ADD);

//创建并输出完成item，action
export const completedItem = createAction(constants.SRC5_COMPLETED);

//创建筛选显示item，action
export const showItem = createAction(constants.SRC5_SHOW_ITEM);
