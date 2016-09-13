import React, { Component } from 'react';
import { connect } from 'react-redux';

class Tag extends Component {
  render() {
    const { tag } = this.props;
    console.log(`render Tag #${tag.id}`);

    return (
      <tr style={{ cursor: 'pointer' }}>
        <td>{tag.id}</td>
        <td>{tag.name}</td>
      </tr>
    )
  }
}
export default connect(
  ({ tags }, { id }) =>
    ({ tag: tags[id] })
)(Tag);
