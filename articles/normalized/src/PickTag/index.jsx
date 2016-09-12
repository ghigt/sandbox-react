import React, { Component } from 'react';

import Tags from './Tags';

export default class PickTag extends Component {
  render() {
    console.log('render PickTag');

    return (
      <div
        style={{
          position: 'fixed',
          width: '200px',
          border: '1px solid #111',
          right: '10px',
          top: '10px',
          padding: '10px',
        }}
      >
        <h2>Tags :</h2>
        <Tags />
      </div>
    )
  }
}
