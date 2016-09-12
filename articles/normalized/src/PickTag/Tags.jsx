import React, { Component } from 'react';
import { connect } from 'react-redux';

import Tag from './Tag';

class Tags extends Component {
  render() {
    const { ids } = this.props;
    console.log('render Tags');

    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
          </tr>
        </thead>
        <tbody>
          {ids.map((id) => (
            <Tag id={id} key={id} />
          ))}
        </tbody>
      </table>
    )
  }
}
export default connect(
  ({ tags: { ids } }) =>
    ({ ids })
)(Tags);
