import React, { Component } from 'react';
import { connect } from 'react-redux';

import Tags from './Tags';

class PickTag extends Component {

  constructor(args) {
    super(...args);

    this.onPageChange = this.onPageChange.bind(this);
  }

  onPageChange(page) {
    console.log(page);
  }

  render() {
    const { pickTag } = this.props;
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
          textAlign: 'center',
        }}
      >
        <h4 style={{ textAlign: 'center '}}>Tags</h4>
        <Tags
          ids={pickTag.ids}
          page={pickTag.page}
          pageCount={pickTag.pageCount}
          totalCount={pickTag.totalCount}
          onPageChange={this.onPageChange}
        />
      </div>
    )
  }
}
export default connect(
  ({ ui: { pickTag } }) =>
    ({ pickTag })
)(PickTag);
