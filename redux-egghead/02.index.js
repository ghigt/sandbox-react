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

// Small implementation of the real `createStore` function
const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener())
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    // Returns a listener removing function
    return () => {
      listener = listeners.filter(l => l !== listener);
    };
  };

  // Dispatch the initial value
  dispatch({});

  return { getState, dispatch, subscribe };
};

// Create the store using the reducer `counter`
const store = createStore(counter);

const render = () => {
  document.body.innerText = store.getState();
}

// Subscribe the `render` to be called for each action passed
store.subscribe(render);
// Output the initial state by calling it once before the `click` listener
render();

// Like if had a button, each time the mouse is clicked, an action
// is dispatched
document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
})
