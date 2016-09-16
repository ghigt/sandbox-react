import React, { Component } from 'react';
import { connect } from 'react-redux';

import Tags from './Tags';

import './index.css';

class PickTag extends Component {

  constructor(args) {
    super(...args);

    this.fetch = this.fetch.bind(this);
  }

  fetch(options) {
    this.props.actions.tags.fetch(Object.assign(
      {
        page: this.props.page,
        pageCount: this.props.pageCount,
        filters: this.props.filters,
      },
      options,
    ));
  }

  render() {
    const { pickTag, onClose } = this.props;
    console.log('render PickTag');

    return (
      <div className="PickTag">
        <i className="PickTag-close" onClick={onClose} />
        <h4 style={{ textAlign: 'center '}}>Tags</h4>
        <Tags
          ids={pickTag.ids}
          page={pickTag.page}
          pageCount={pickTag.pageCount}
          totalCount={pickTag.totalCount}
          onChange={this.fetch}
        />
      </div>
    )
  }
}
export default connect(
  ({ ui: { pickTag } }) =>
    ({ pickTag })
)(PickTag);
