import React, { Component } from 'react';

export default class Pagination extends Component {
  render() {
    const { page, pageCount, totalCount, onPageChange } = this.props;
    const nbPages = ~~((totalCount - 1) / pageCount) + 1;
    console.log('render Pagination');

    return (
      <div>
        {
          [...Array(nbPages).keys()].map((id) => (
            <span
              style={{
                padding: '5px',
                border: '1px solid #111',
                marginLeft: '3px',
                cursor: 'pointer',
                backgroundColor: page === id+1 ? '#ddd' : 'white',
              }}
              key={id}
              onClick={onPageChange.bind(this, id+1)}
            >{id+1}</span>
          ))
        }
      </div>
    )
  }
}
