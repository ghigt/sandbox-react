// COMBINE REDUCER IMPLEMENTATION

// This is our reducer for a single todo
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state;
  }
}

// This is our reducer for multiple todos
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action))
    default:
      return state;
  }
};

// This is our reducer for the visibility
const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

import { combineReducers } from 'redux';

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

import { createStore } from 'redux';

const store = createStore(todoApp);

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let nextTodo = 1;
class TodoApp extends Component {
  render() {
    return <div>
      <input ref={node => {this.input = node}} />
      <button type="button" onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            text: this.input.value,
            id: nextTodo++
          });
          this.input.value = '';
        }}>
        Add Todo
      </button>
      <ul>
        {this.props.todos.map(todo =>
          <li key={todo.id}
              onClick={() => {
                store.dispatch({
                  type: 'TOGGLE_TODO',
                  id: todo.id
                });
              }}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none'
              }}>
            {todo.text}
          </li>
        )}
      </ul>
    </div>
  }
}

const render = () => {
  console.log(store.getState());
  ReactDOM.render(
    <TodoApp todos={store.getState().todos} />,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();
