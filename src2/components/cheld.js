/**
 * Created by huweijian on 2016/12/7.
 * @title
 */

import React, {Component, PropTypes, contextTypes} from 'react';
import {connect} from 'react-redux';

class Cheld extends Component {
    componentDidMount(){
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() =>
            this.forceUpdate()
        );
    }
    render(){
        const props = this.props;
        const { store } = this.context;
        const a = store.getState();
        console.log(props, store, a);
        return (
            <div>
                <h3>{a.a}</h3>
            </div>
        )
    }
}

Cheld.contextTypes = {
    store: React.PropTypes.object
};


export default Cheld;