/**
 * Created by huweijian on 2016/12/15.
 * @title
 */
import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import App from './constainers/app';
import configureStore from './stroe/createStore';

const store = configureStore();

export default class Root extends Component {
    render(){
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}
