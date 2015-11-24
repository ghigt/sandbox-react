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

import { createStore } from 'redux';
// Create the store using the reducer `counter`
const store = createStore(counter);

// Using a `render`, it allows us to output the initial state
const render = () => {
  document.body.innerText = store.getState();
}

// Subscribe the `render` to be called for each action passed
store.subscribe(render);
render();

// Like if had a button, each time the mouse is clicked, an action
// is dispatched
document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
})
