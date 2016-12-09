/**
 * Created by huweijian on 2016/12/9.
 * @title
 */
import React, {Component, PropTypes} from 'react'

export default class Todo extends Component{
    render(){
        return (
            <li
                onClick={this.props.onClick}
                style={{
                    textDecoration: this.props.completed ? 'line-through' : 'none',
                    cursor: this.props.completed ? 'default' : 'pointer'
                }}>
                {this.props.text}
            </li>
        )
    }
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};
