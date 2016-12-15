/**
 * Created by huweijian on 2016/12/13.
 * @title
 */
import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/actions';


/**
 * 创建App组件
 */
class App extends Component {
    /**
     * 获取props
     * @param props
     */
    constructor(props){
        super(props);
    }

    /**
     * 组件渲染后执行dispatch调用默认接口
     */
    componentDidMount(){
        const { dispatch, selectedSubreddit } = this.props;
        dispatch(action.toFetchItem(selectedSubreddit))
    }
    render(){
        const {items} = this.props;
        const html = items.map(function (item) {
            return (
                <span key={item.id}>{item.text}</span>
            )
        });
        return (
            <div>
                {html}
            </div>
        )
    }
}

/**
 * 定义关联state方法
 * @param state
 * @returns {{selectedSubreddit: *, items: Array, isFetching: boolean, lastUpdated}}
 */
function mapStateToProps(state) {
    const { selectedSubreddit, itemBySubreddit } = state;
    const {
        isFetching,
        lastUpdated,
        items: items
    } = itemBySubreddit[selectedSubreddit] || {
        isFetching: true,
        items: []
    };

    return {
        selectedSubreddit,
        items,
        isFetching,
        lastUpdated
    }
}

/**
 * 关联并输出App容器组件
 */
export default connect(mapStateToProps)(App);


