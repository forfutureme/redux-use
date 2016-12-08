/**
 * Created by huweijian on 2016/12/7.
 * @title
 */

export default function counter(state = { count: 0, a: 1 }, action) {
    const count = state.count;
    const  a = state.a;
    switch (action.type) {
        case 'increase':
            return { count: count + 1, a }
        default:
            return state
    }
}