import React, { Component } from 'react';
import { connect } from 'react-redux';

import Module from './Module';

class Modules extends Component {
  render() {
    const { modules, onAdd, onRemove, onUpdate } = this.props;
    console.log('render Modules');

    return (
      <div>
        <h2>Mes modules :</h2>
        {modules.map((module) => (
          <Module module={module} key={module.id} onRemove={onRemove} onUpdate={onUpdate} />
        ))}
        <button type="button" onClick={onAdd}>Ajouter un module</button>
      </div>
    )
  }
}
export default connect()(Modules);
