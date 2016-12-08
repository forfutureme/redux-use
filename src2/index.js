/**
 * Created by huweijian on 2016/12/7.
 * @title
 */

import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import counter from './reducers';
import App from './containers/app';



//Store
const store = createStore(counter);

render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('container')
)

