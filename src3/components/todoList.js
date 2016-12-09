/**
 * Created by huweijian on 2016/12/9.
 * @title
 */
import React, {Component, PropTypes} from 'react';
import actions from '../actions/actions';
import Todo from './todo';

export default class TodoList extends Component {
    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() =>
            this.forceUpdate()
        );
    }


    render(){
        //获取绑定在组件上的context
        const {store} = this.context;
        const {lists} = this.props;
        const dispatch = store.dispatch;
        return (
            <ul>
                {
                    lists.map((list, index) =>
                        <Todo
                            {...list}
                            key={index}
                            onClick={() => dispatch(actions.completeTodo(index))}/>
                    )
                }
            </ul>
        )
    }
}

TodoList.contextTypes = {
    //onTodoClick: PropTypes.func.isRequired,
    // lists: PropTypes.arrayOf(PropTypes.shape({
    //     text: PropTypes.string.isRequired,
    //     completed: PropTypes.bool.isRequired
    // }).isRequired).isRequired
    store: React.PropTypes.object,
    dispatch: React.PropTypes.func
};

// lists={showLists}
// onTodoClick={(index) => dispatch(actions.completeTodo(index))}