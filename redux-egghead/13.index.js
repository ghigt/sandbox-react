import expect from 'expect';
import deepFreeze from 'deep-freeze';

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

// import { combineReducers } from 'redux';
// Our implementation of the real combineReducers
const combineReducers = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] = reducers[key](
          state[key],
          action
        );
        return nextState;
      },
      {}
    );
  };
};

// This is our reducer for the App
const todoApp = combineReducers({
  todos,
  visibilityFilter
});

import { createStore } from 'redux';

const store = createStore(todoApp);

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const FilterLink = ({ filter, currentFilter, children, onClick }) => {
  if (filter === currentFilter) {
    return <span>{children}</span>;
  }

  return <a href="#"
            onClick={e => {
              e.preventDefault();
              onClick(filter);
            }}>
    {children}
  </a>;
};

const Footer = ({ visibilityFilter, onFilterClick }) => (
  <p>
    Show:
    {' '}
    <FilterLink filter="SHOW_ALL"
                currentFilter={visibilityFilter}
                onClick={onFilterClick}>
      All
    </FilterLink>
    {' '}
    <FilterLink filter="SHOW_ACTIVE"
                currentFilter={visibilityFilter}
                onClick={onFilterClick}>
      Active
    </FilterLink>
    {' '}
    <FilterLink filter="SHOW_COMPLETED"
                currentFilter={visibilityFilter}
                onClick={onFilterClick}>
      Completed
    </FilterLink>
  </p>
);

const Todo = ({ onClick, completed, text }) => (
  <li onClick={onClick}
      style={{ textDecoration: completed ? 'line-through' : 'none' }}>
    {text}
  </li>
);

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo =>
      <Todo key={todo.id}
            onClick={() => onTodoClick(todo.id)}
            {...todo} />
    )}
  </ul>
);

const AddTodo = ({ onAddClick }) => {
  let input;

  return <div>
    <input ref={node => {input = node}} />
    <button type="button"
            onClick={() => {
              onAddClick(input.value);
              input.value = '';
            }}>
      Add Todo
    </button>
  </div>;
};

const getVisibleTodos = (todos = [], filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      return todos;
  };
};

let nextTodoId = 1;
const TodoApp = ({ todos, visibilityFilter }) => (
  <div>
    <AddTodo onAddClick={text =>
               store.dispatch({
                 type: 'ADD_TODO',
                 text,
                 id: nextTodoId++
               })} />
    <TodoList todos={getVisibleTodos(todos, visibilityFilter)}
              onTodoClick={id =>
                store.dispatch({
                  type: 'TOGGLE_TODO',
                  id
                })} />
    <Footer visibilityFilter={visibilityFilter}
            onFilterClick={filter =>
              store.dispatch({
                type: 'SET_VISIBILITY_FILTER',
                filter
              })} />
  </div>
);

const render = () => {
  console.log(store.getState());
  ReactDOM.render(
    <TodoApp {...store.getState()} />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
