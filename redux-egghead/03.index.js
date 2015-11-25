import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// Our reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

// Create the store using the reducer `counter`
const store = createStore(counter);

// Our "dumb" component which calls functions when one of its buttons
// is clicked, and prints the value
const Counter = ({ value, onIncrement, onDecrement }) => {
  return <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
}

// Render is called each time the dispatch method is called, it defines
// the functions (as a "smart" component) to be called dispatching actions.
const render = () => {
  ReactDOM.render(
    <Counter value={store.getState()}
             onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
             onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />,
    document.getElementById('root')
  )
}

// Subscribe the `render` to be called for each action passed
store.subscribe(render);
// Output the initial state by calling it once before the `click` listener
render();
