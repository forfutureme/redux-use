/**
 * Created by huweijian on 2016/12/9.
 * @title 整合所有action
 */

import constants from '../constants/constants';
import fetch from 'isomorphic-fetch';
import toAjax from '../tools/toAjax';

/**
 * 发起何种请求
 * @param subreddit
 * @returns {{type: string, subreddit: *}}
 */
export function selectSubreddit(subreddit) {
    return {
        type: constants.SELECT_SUBREDDIT,
        subreddit
    }
}

/**
 * 不请求数据
 * @param subreddit
 * @returns {{type: string, subreddit: *}}
 */
export function requireApiNone(subreddit) {
    return {
        type: constants.REQUIRE_API_NONE,
        subreddit
    }
}

/**
 * 开始请求
 * @param subreddit
 * @returns {{type: string, subreddit: *}}
 */
function requireApiStart(subreddit) {
    return {
        type: constants.REQUIRE_API_START,
        subreddit
    }
}

/**
 * 请求数据成功
 * @param subreddit
 * @param json
 * @returns {{type: string, subreddit: *, items: *, successAt: (*|number)}}
 */
function requireApiSuccess(subreddit, json) {
    return {
        type: constants.REQUIRE_API_SUCCESS,
        subreddit,
        items: json,
        successAt: Date.now()
    }
}

/**
 * 请求数据失败
 * @param subreddit
 * @param error
 * @returns {{type: string, subreddit: *, error: *, failAt: number}}
 */
function requireApiFail(subreddit, error) {
    return {
        type: constants.REQUIRE_API_FAIL,
        subreddit,
        error: error,
        failAt: Date.now()
    }
}

/**
 * 请求数据方法
 * @param subreddit
 * @returns {function(*)}
 */
function fetchItem(subreddit) {
    return dispatch => {
        dispatch(requireApiStart(subreddit));
        return toAjax({
            params: {
                '_mt': subreddit,
                query: {
                    id: 1,
                    password: 123456
                }
            }
        })
            .then(json => dispatch(requireApiSuccess(subreddit, json)))
            .catch(error => dispatch(requireApiFail(subreddit, error)))
    }
}

/**
 * 判断是否可以发请求
 * @param state
 * @param subreddit
 * @returns {*}
 */
function shouldFetchItem(state, subreddit) {
    const item = state.itemBySubreddit[subreddit];
    if (!item){
        return true;
    } else if (item.isFetching){
        return false;
    } else {
        return item.didInvalidate;
    }
}

/**
 * 尝试发起请求
 * @param subreddit
 * @returns {function(*, *)}
 */
export function toFetchItem(subreddit) {
    return (dispatch, getState) => {
        if (shouldFetchItem(getState(), subreddit)){
            return dispatch(fetchItem(subreddit));
        }
    }
}


