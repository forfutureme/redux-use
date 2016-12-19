/**
 * Created by huweijian on 2016/12/15.
 * @title  reducer
 */
import { combineReducers } from 'redux';
import { handleActions, handleAction, combineActions } from 'redux-actions'
import constants from '../constants/constants';
import * as actions from '../actions/actions';


//留着可以做参考
//const items = handleActions(constants.SRC5_ADD, (state = [], action) => ([...state, action.payload]));

// const items1 = handleActions({
//     [constants.SRC5_ADD]: (state = [], action) => ({
//         items: [...state.items, action.payload]
//     })
// }, {items: []});
//
// function lists(state = [], action) {
//     switch (action.type){
//         case constants.SRC5_ADD:
//             return [...state, action.payload];
//
//         default:
//             return state;
//     }
// }

// const items = handleAction(constants.SRC5_ADD, {
//     next(state, action){
//         //return [...state, action.payload];
//         switch (action.type){
//             case constants.SRC5_ADD:
//                 return [...state, action.payload];
//
//             case constants.SRC5_COMPLETED:
//                 return [
//                     ...state.slice(0, action.payload),
//                     {...state[action.payload], completed: true},
//                     ...state.slice(action.payload)];
//             default:
//                 return state
//         }
//
//     }
// }, []);

/**
 * 列表数据reducer
 */
const items = handleAction(combineActions(actions.addItem, actions.completedItem), {
    next(state, action){
        switch (action.type){
            case constants.SRC5_ADD:
                return [...state, action.payload];

            case constants.SRC5_COMPLETED:
                return [
                    ...state.slice(0, action.payload),
                    {...state[action.payload], completed: true},
                    ...state.slice(action.payload + 1)];
            default:
                return state
        }
    }
}, []);

/**
 * 显示分类reducer
 */
const showItem = handleAction(constants.SRC5_SHOW_ITEM, {
    next(state, action){
        return action.payload
    }
}, constants.SRC5_SHOW_ALL);


/**
 * 合并所有reducer， redux-actions提供了合并的方法，但是我还是喜欢用redux自己的
 * @type {Reducer<S>}
 */
const reducer = combineReducers({
    items,
    showItem
});

//输出reducer
export default reducer;
