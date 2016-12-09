/**
 * Created by huweijian on 2016/12/9.
 * @title
 */
import React, {Component, PropTypes} from 'react';

export default class Footer extends Component {
    renderFilter(filter, name) {
        if (filter === this.props.filter) {
            return name
        }

        return (
            <a href='#' onClick={e => {
                e.preventDefault()
                this.props.onFilterChange(filter)
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

Footer.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    filter: PropTypes.oneOf([
        'TODO_SHOW_ALL',
        'TODO_SHOW_COMPLETED',
        'TODO_SHOW_ACTIVE'
    ]).isRequired
};