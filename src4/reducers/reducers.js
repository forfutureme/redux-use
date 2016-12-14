/**
 * Created by huweijian on 2016/12/9.
 * @title 整合所有reducer
 */

import {combineReducers} from 'redux';
import constants from '../constants/constants';

/**
 * 选择发起请求名
 * @param state
 * @param action
 * @returns {string}
 */
function selectedSubreddit(state = 'api', action) {
    switch (action.type) {
        case constants.SELECT_SUBREDDIT:
            return action.subreddit
        default:
            return state
    }
}

/**
 * 处理请求数据各种状态
 * @param state
 * @param action
 * @returns {*}
 */
function items(state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
    error: null
}, action) {
    switch (action.type) {
        case constants.REQUIRE_API_NONE:
            return {...state, didInvalidate: true};

        case constants.REQUIRE_API_START:
            return {...state, isFetching: true, didInvalidate: false};

        case constants.REQUIRE_API_SUCCESS:
            return {...state, isFetching: false, didInvalidate: false, items: action.items, error: null};

        case constants.REQUIRE_API_FAIL:
            return {...state, isFetching: false, didInvalidate: false, items: [], error: action.error};

        default:
            return state;
    }
}

/**
 *
 * @param state
 * @param action
 * @returns {{}}
 */
function itemBySubreddit(state = {}, action) {
    switch (action.type){
        case constants.REQUIRE_API_NONE:
        case constants.REQUIRE_API_START:
        case constants.REQUIRE_API_FAIL:
        case constants.REQUIRE_API_SUCCESS:
            return {...state, [action.subreddit]: items(state[action.subreddit], action)};
        default:
            return state;
    }
}

const reducer = combineReducers({
    selectedSubreddit,
    itemBySubreddit
});

export default reducer;


