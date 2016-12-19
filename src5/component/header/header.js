/**
 * Created by huweijian on 2016/12/16.
 * @title Header
 */
import React, { Component, PropTypes } from 'react';

/**
 * 吃实话并输出header组件
 */
export default class Header extends Component {
    constructor(props){
        super(props)
    }
    render(){
        let headerStyle = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 45,
            fontSize: 16,
            color: '#333'
        };
        return(
            <header style={headerStyle}>{this.props.title}</header>
        )
    }
}
