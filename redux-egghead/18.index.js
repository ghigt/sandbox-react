/*
 * Passing the Store Down with <Provider> from React Redux
 */

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

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>;
  }

  return <a href="#"
            onClick={e => {
              e.preventDefault();
              onClick();
            }}>
    {children}
  </a>;
};

class FilterLink extends Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const props = this.props;
    const { store } = this.context;
    const state = store.getState();

    return <Link active={props.filter === state.visibilityFilter}
                 onClick={() =>
                   store.dispatch({
                     type: 'SET_VISIBILITY_FILTER',
                     filter: props.filter
                   })}>
      {props.children}
    </Link>;
  }
}
FilterLink.contextTypes = {
  store: PropTypes.object
};

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter="SHOW_ALL">All</FilterLink>
    {' '}
    <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
    {' '}
    <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
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

const AddTodo = (props, { store }) => {
  let input;

  return <div>
    <input ref={node => {input = node}} />
    <button type="button"
            onClick={() => {
              store.dispatch({
                type: 'ADD_TODO',
                text: input.value,
                id: nextTodoId++
              });
              input.value = '';
            }}>
      Add Todo
    </button>
  </div>;
};
AddTodo.contextTypes = {
  store: PropTypes.object
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

class VisibleTodoList extends Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const props = this.props;
    const { store } = this.context;
    const state = store.getState();

    return <TodoList todos={getVisibleTodos(state.todos, state.visibilityFilter)}
                     onTodoClick={id =>
                       store.dispatch({
                         type: 'TOGGLE_TODO',
                         id
                       })}
    />;
  }
}
VisibleTodoList.contextTypes = {
  store: PropTypes.object
};

let nextTodoId = 1;

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

import { Provider } from 'react-redux';
import { createStore } from 'redux';

ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
