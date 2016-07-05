import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

const SIZE = 10;
// const initialState = [{id: 1, marked: false}, {id: 2, marked: true}]

const initialState = [...Array(SIZE).keys()].map(id => ({ id: id+1, marked: false }))

function items(state = initialState, action) {
  switch (action.type) {
  case 'MARK':
    return state.map((item) =>
      action.id === item.id ? {...item, marked: !item.marked } : item
    );
  default:
    return state;
  }
}

const Item = (props) => {
  return <li
    onClick={props.onClick}
    style={{ textDecoration: props.marked ? 'line-through' : 'none' }}
  >
    {JSON.stringify(props)}
  </li>
}

class App extends Component {
  render() {
    console.log(this.props)
    const { items, markItem } = this.props;
    return (
      <div>
        <ul>
        {items.map(item =>
          <Item key={item.id} id={item.id} marked={item.marked} onClick={markItem.bind(this, item.id)} />
        )}
        </ul>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return state;
}

const markItem = (id) => ({type: 'MARK', id});

const MyApp = connect(
  mapStateToProps,
  {markItem}
)(App);

const itemApp = combineReducers({
  items,
});

ReactDOM.render(
  <Provider store={createStore(itemApp)}>
    <MyApp />
  </Provider>,
  document.getElementById('root')
);
