/**
 * Created by huweijian on 2016/12/7.
 * @title
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {increase} from  '../actions';
import Counter from '../components/counter';

/**
 * 返回当前计数
 * @param state
 * @returns {{count: *}}
 */
function mapStateToProps(state) {
    return {
        value: state.count
    }
}

/**
 * 返回action操作
 * @param dispatch
 * @returns {{onIncreaseClick: (function(): *)}}
 */
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increase)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);