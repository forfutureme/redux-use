/**
 * Created by huweijian on 2016/12/7.
 * @title
 */
import React, {Component, PropTypes} from 'react';
import Cheld from './cheld';

class Counter extends Component {
    render() {
        console.log(this.props);
        const { value, onIncreaseClick } = this.props;
        return (
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>Increase</button>
                <Cheld/>
            </div>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired
};

export default Counter;