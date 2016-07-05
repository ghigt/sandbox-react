import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

const SIZE = 500;
// const initialState = [{id: 1, marked: false}, {id: 2, marked: true}]

const initialState = {
  ids: [...Array(SIZE).keys()],
  items: [...Array(SIZE).keys()].reduce((agg, id) => {
    agg[id] = { id, marked: false };
    return agg;
  }, {})
};

function itemsReducer(state = initialState, action) {
  return {
    ids: ids(state.ids, action),
    items: items(state.items, action),
  }
}

function ids(state = [], action) {
  return state;
}

function items(state = {}, action) {
  switch (action.type) {
    case 'MARK':
      const item = state[action.id];
      return {
        ...state,
        [action.id]: {...item, marked: !item.marked}
      };
    default:
      return state;
  }
}

const Item = ({ id, item, markItem }) => {
  console.log('render Item', item)
  return <li
    onClick={markItem.bind(this, id)}
    style={{ textDecoration: item.marked ? 'line-through' : 'none' }}
  >
    {JSON.stringify(item)}
  </li>
}

function mapStateToProps(_, initialProps) {
  const { id } = initialProps;
  return (state) => {
    console.log('mapStateToProps')
    const { items } = state;
    return {
      item: items[id]
    };
  }
}

const markItem = (id) => ({type: 'MARK', id});

const ItemConnected = connect(
  mapStateToProps,
  { markItem }
)(Item);

class App extends Component {
  render() {
    const { ids } = this.props;
    return (
      <div>
        <ul>
        {ids.map(id =>
          <ItemConnected key={id} id={id} />
        )}
        </ul>
      </div>
    );
  }
};

function mapStateToAppProps(state) {
  return {ids: state.ids};
}

const AppConnected = connect(mapStateToAppProps)(App);

ReactDOM.render(
  <Provider store={createStore(itemsReducer)}>
    <AppConnected />
  </Provider>,
  document.getElementById('root')
);
