/**
 * Created by huweijian on 2016/12/8.
 * @title 主入口
 */

//引入react库
import React from 'react';
//引入react-dom库的render方法
import { render } from 'react-dom';
//引入redux的创建store方法
import { createStore } from 'redux';
//引入react-redux的Provider容器
import { Provider } from 'react-redux';
//引入App容器
import App from './containers/app';
//引入reducers
import todoApp from './reducers/reducers';

//初始化reducers
const store = createStore(todoApp);

//获取跟dom
let rootElement = document.getElementById('container');
//渲染页面
render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);

