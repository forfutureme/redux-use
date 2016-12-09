/**
 * Created by huweijian on 2016/12/9.
 * @title
 */

//引入React，及其组件类(component)，以及属性类型检查类(propTypes)
import React, {Component, PropTypes} from 'react';
//引入redux的connect方法
import {connect} from 'react-redux';
//映入常量
import constValue from '../constValue/constValue';
//引入actions
import actions from '../actions/actions';
//引入新增item组件
import AddTodo from '../components/addTodo';
//引入显示list组件
import TodoList from '../components/todoList';
//引入操作显示组件
import Footer from '../components/footer';

/**
 * 创建App组件
 */
class App extends Component {
    render(){
        const {showLists} = this.props;
        return (
            <div>
                <AddTodo />
                <TodoList lists={showLists} />
                <Footer />
            </div>
        )
    }
}

App.propTypes = {
    showLists: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    showFilter: PropTypes.oneOf([
        'TODO_SHOW_ALL',
        'TODO_SHOW_COMPLETED',
        'TODO_SHOW_ACTIVE'
    ])
};


/**
 * 创建过滤lists列表方法
 * @param lists
 * @param filter
 * @returns {*}
 */
function showList(lists, filter) {
    switch (filter) {
        case constValue.TODO_SHOW_ALL:
            return lists;
        case constValue.TODO_SHOW_COMPLETED:
            return lists.filter((list) => list.completed);
        case constValue.TODO_SHOW_ACTIVE:
            return lists.filter((list) => !list.completed);
        default:
            return lists
    }
}

/**
 * 定义connect-mapStateToProps方法
 * @param state
 * @returns {*}
 */
function mapStateToProps(state) {
    return {
        showLists: showList(state.lists, state.todoShow),
        showFilter: state.todoShow
    };
}

function mapDispatchToProps() {

}

export default connect(mapStateToProps)(App);