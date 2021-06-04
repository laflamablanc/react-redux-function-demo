import React from 'react'

import { incrementCounter, decrementCounter } from '../redux/actions/counterActions.js'

class Counter extends React.Component {

  render(){
    return (
    <div>
        <div>
        <button
            aria-label="Increment value"
            onClick={incrementCounter}
        >
            Increment
        </button>
        <span>{count}</span>
        <button
            aria-label="Decrement value"
            onClick={decrementCounter}
        >
            Decrement
        </button>
        </div>
    </div>
    )
  }
}

const mapStateToProps = (state, props) = {
    counter: state.counter,
    user: state.user
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      incrementCounter: (payload) =>
        dispatch(incrementCounter(payload, ownProps)),
      decrementCounter: (payload) =>
        dispatch(decrementCounter(payload, ownProps)),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Counter)