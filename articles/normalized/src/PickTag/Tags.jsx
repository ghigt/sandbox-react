import React, { Component } from 'react';
import { connect } from 'react-redux';

import Tag from './Tag';
import Pagination from './Pagination';

class Tags extends Component {
  render() {
    const { ids, page, pageCount, totalCount, onPageChange } = this.props;
    console.log('render Tags');

    return (
      <div>
        <table width="100%">
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
        <div>
          <Pagination
            page={page}
            pageCount={pageCount}
            totalCount={totalCount}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    )
  }
}
export default connect()(Tags);
