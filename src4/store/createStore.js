/**
 * Created by huweijian on 2016/12/13.
 * @title
 */
//引入redux的创建store方法，以及使用中间件方法
import { createStore, applyMiddleware } from 'redux';
//引入支持异步action的中间件
import thunkMiddleware from 'redux-thunk';
//引入打印log中间件
import createLogger from 'redux-logger';
//引入reducer
import reducer from '../reducers/reducers';

//初始化打印log中间件
const loggerMiddleware = createLogger();

/**
 * 创建并输出初始化store方法
 * @param preloadedState state默认值
 * @returns {Store}
 */
export default function configureStore(preloadedState) {
    return createStore(
        reducer,
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )
}

