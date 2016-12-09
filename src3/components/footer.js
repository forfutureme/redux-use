/**
 * Created by huweijian on 2016/12/9.
 * @title
 */
import React, {Component, PropTypes} from 'react';
import actions from '../actions/actions';

export default class Footer extends Component {
    renderFilter(filter, name) {
        const {store} = this.context;
        const {todoShow} = store.getState();
        const dispatch = store.dispatch;
        if (filter === todoShow) {
            return name
        }

        return (
            <a href='#' onClick={e => {
                e.preventDefault();
                dispatch(actions.showTodo(filter));
            }}>
                {name}
            </a>
        )
    }

    render(){
        return (
            <p>
                显示:
                {' '}
                {this.renderFilter('TODO_SHOW_ALL', '所有')}
                {', '}
                {this.renderFilter('TODO_SHOW_COMPLETED', '已完成')}
                {', '}
                {this.renderFilter('TODO_SHOW_ACTIVE', '活的')}
                .
            </p>
        )
    }
}

Footer.contextTypes = {
    store: React.PropTypes.object
};

