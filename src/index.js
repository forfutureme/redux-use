/**
 * Created by huweijian on 2016/12/5.
 */
import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './containers/App';
import todoApp from './reducers';



let store = createStore(todoApp);
let container = document.querySelector('#container');

render(
    <Provider store={store}>
        <App />
    </Provider>,
    container
);


