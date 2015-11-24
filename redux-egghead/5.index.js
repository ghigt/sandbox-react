import expect from 'expect';
import deepFreeze from 'deep-freeze';

// MUTABLE vs IMMUTABLE

const toggleTodo = (todo) => {
  // BAD !
  // todo.completed = !todo.completed;
  // return todo;

  // FINE !
  // return {
  //   id: todo.id,
  //   text: todo.text,
  //   completed: !todo.completed
  // }

  // GOOD !
  // return Object.assign({}, todo, {
  //   completed: !todo.completed
  // })

  // GREAT !
  return {
    ...todo,
    completed: !todo.completed
  }
};

const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    text: 'Learn Redux',
    completed: false
  };
  const todoAfter = {
    id: 0,
    text: 'Learn Redux',
    completed: true
  };

  deepFreeze(todoBefore);

  expect(
    toggleTodo(todoBefore)
  ).toEqual(todoAfter);
};

testToggleTodo();
console.log('All tests passed.');
