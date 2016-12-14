/**
 * Created by huweijian on 2016/12/9.
 * @title
 */
import 'babel-polyfill';

import React from 'react';
import { render} from 'react-dom';

//引入Root容器
import Root from './containers/root';

render(
    <Root/>,
    document.querySelector('#container')
);



