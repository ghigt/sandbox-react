/*
 * Optimization of Todos render
 */

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

const SIZE = 10;
let nextTodoId = SIZE;
const initialState = {
  ids: [...Array(SIZE).keys()],
  todos: [...Array(SIZE).keys()].reduce((agg, id) => {
    agg[id] = { id, completed: false, text: 'aaa'+id };
    return agg;
  }, {})
};

/*
 * Reducers
 */

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state;
  }
}

const ids = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [ ...state, action.id ];
    default:
      return state;
  }
}

const todos = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
    case 'TOGGLE_TODO':
      return {
        ...state,
        [action.id]: todo(state[action.id], action)
      };
    default:
      return state;
  }
};

const todosReducer = (state = initialState, action) => {
  return {
    ids: ids(state.ids, action),
    todos: todos(state.todos, action),
  }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const reducers = combineReducers({
  todos: todosReducer,
  visibilityFilter
});

/*
 * Actions
 */
const addTodo = (text) => {
  return { type: 'ADD_TODO', text, id: nextTodoId++ };
};

const setVisibilityFilter = (filter) => {
  return { type: 'SET_VISIBILITY_FILTER', filter };
};

const toggleTodo = (id) => {
  return { type: 'TOGGLE_TODO', id };
};


let Link = ({ active, children, onClick }) => {
  console.log('Link')
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
const mapStateToLinkProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};
const mapDispatchToLinkProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
  };
};
Link = connect(mapStateToLinkProps, mapDispatchToLinkProps)(Link);

const Footer = () => (
  <p>
    Show:
    {' '}
    <Link filter="SHOW_ALL">All</Link>
    {' '}
    <Link filter="SHOW_ACTIVE">Active</Link>
    {' '}
    <Link filter="SHOW_COMPLETED">Completed</Link>
  </p>
);

let Todo = ({ toggleTodo, todo, id }) => {
  console.log('Todo');
  return <li onClick={toggleTodo.bind(this, id)}
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
    {todo.text}
  </li>
};
const mapStateToTodoProps = (_, initialProps) => {
  const { id } = initialProps;
  return (state) => {
    const { todos } = state.todos;
    console.log('mapStateToTodoProps')
    return {
      todo: todos[id]
    }
  }
};
Todo = connect(mapStateToTodoProps, { toggleTodo })(Todo);


let TodoList = ({ ids }) => {
  console.log('TodoList');
  return <ul>
    {ids.map(id =>
      <Todo key={id} id={id} />
    )}
  </ul>
};

let AddTodo = ({ dispatch }) => {
  let input;

  return <div>
    <input ref={node => {input = node}} />
    <button type="button"
            onClick={() => {
              dispatch(addTodo(input.value));
              input.value = '';
            }}>
      Add Todo
    </button>
  </div>;
};
AddTodo = connect()(AddTodo);

const getVisibleTodosIds = ({ ids = [], todos = {} }, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return ids;
    case 'SHOW_COMPLETED':
      return Object.keys(todos).filter(id => todos[id].completed);
    case 'SHOW_ACTIVE':
      return Object.keys(todos).filter(id => !todos[id].completed);
    default:
      return ids;
  };
};

const mapStateToTodoListProps = (state) => {
  return {
    ids: getVisibleTodosIds(
      state.todos,
      state.visibilityFilter
    )
  };
};
TodoList = connect(mapStateToTodoListProps)(TodoList);

const TodoApp = () => (
  <div>
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
);

/*
 * ReactDOM
 */

import { applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

const logger = createLogger();
const store = createStore(
  reducers,
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
