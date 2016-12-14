/**
 * Created by huweijian on 2016/12/13.
 * @title
 */
import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/actions';

console.log(action);

class App extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    componentDidMount(){
        const { dispatch, selectedSubreddit } = this.props;
        dispatch(action.toFetchItem(selectedSubreddit))
    }
    render(){
        const {items} = this.props;
        const html = items.map(function (item) {
            return (
                <span>{item.text}</span>
            )
        });
        return (
            <div>
                {html}
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { selectedSubreddit, itemBySubreddit } = state
    const {
        isFetching,
        lastUpdated,
        items: items
    } = itemBySubreddit[selectedSubreddit] || {
        isFetching: true,
        items: []
    }

    return {
        selectedSubreddit,
        items,
        isFetching,
        lastUpdated
    }
}

export default connect(mapStateToProps)(App);


