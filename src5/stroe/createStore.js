/**
 * Created by huweijian on 2016/12/15.
 * @title
 */
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from '../reducers/reducers';

const loggerMiddleware = createLogger();

/**
 * 使用中间件初始化state
 * @param preloadedState
 * @returns {Store}
 */
export default function configureStore(preloadedState) {
    return createStore(
        reducer,
        preloadedState,
        applyMiddleware(
            loggerMiddleware,
            thunkMiddleware
        )
    )
}

