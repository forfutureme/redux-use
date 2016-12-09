/**
 * Created by huweijian on 2016/12/9.
 * @title
 */
import React, {Component, PropTypes} from 'react';
import Todo from './todo';

export default class TodoList extends Component {
    render(){
        return (
            <ul>
                {
                    this.props.lists.map((list, index) =>
                        <Todo
                            {...list}
                            key={index}
                            onClick={() => this.props.onTodoClick(index)}/>
                    )
                }
            </ul>
        )
    }
}

TodoList.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    lists: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired
};