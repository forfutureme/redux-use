/**
 * Created by huweijian on 2016/12/19.
 * @title 确定按钮
 */
import React, {Component, PropTypes} from 'react';


export default class BtnSure extends Component {
    constructor(props, context){
        super(props, context);
    }
    handleClick(){
        const { stroe } = this.context;
        const dispatch = stroe.dispatch;
        let { lists } = stroe.getState();

    }
    render(){

        return (
            <span onClick={this.handleClick}>{this.props.text}</span>
        )
    }
}

