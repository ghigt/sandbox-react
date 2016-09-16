import React, { Component } from 'react';
import { connect } from 'react-redux';

import Module from './Module';

class Modules extends Component {
  render() {
    const { ids, onRemove, onAdd } = this.props;
    console.log('render Modules');

    return (
      <div>
        <h2>Mes modules :</h2>
        {ids.map((id) => (
          <Module id={id} key={id} onRemove={onRemove} />
        ))}
        <button type="button" onClick={onAdd}>Ajouter un module</button>
      </div>
    )
  }
}
export default connect()(Modules);
