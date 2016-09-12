import React, { Component } from 'react';
import { connect } from 'react-redux';

class Module extends Component {

  update(field, { target: { value } }) {
    this.props.onUpdate(this.props.module.id, field, value)
  }

  remove() {
    this.props.onRemove(this.props.module.id);
  }

  render() {
    const { module } = this.props;
    console.log(`render Module #${module.id}`);

    return (
      <div>
        <input
          placeholder="Nom"
          onChange={this.update.bind(this, 'name')}
          type="text"
          value={module.name || ''}
          style={{ margin: 10, width: 500 }}
        />
        <button
          type="button"
          onClick={this.remove.bind(this)}
          style={{ color: 'red' }}
        >x</button>
      </div>
    )
  }
}
export default connect()(Module);
