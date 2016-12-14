/**
 * Created by huweijian on 2016/12/13.
 * @title
 */
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/createStore';
import App from './app';

//初始化store
const store =  configureStore();

export default class Root extends Component {
    render(){
        return(
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}
