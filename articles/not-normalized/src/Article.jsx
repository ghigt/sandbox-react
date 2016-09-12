import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as articlesActionCreators from './actions/articles';

import Modules from './Modules';

class Article extends Component {

  constructor(props) {
    super(props);

    this.addModule = this.addModule.bind(this);
    this.removeModule = this.removeModule.bind(this);
    this.updateModule = this.updateModule.bind(this);
  }

  update(field, { target: { value }}) {
    this.props.actions.articles.update(this.props.article.id, field, value);
  }

  addModule() {
    this.props.actions.articles.addModule(
      { name: '' }
    );
  }

  removeModule(moduleId) {
    this.props.actions.articles.removeModule(
      moduleId
    );
  }

  updateModule(moduleId, field, value) {
    this.props.actions.articles.updateModule(moduleId, field, value);
  }

  render() {
    const { article } = this.props;
    console.log('render Article');

    return (
      <div style={{ margin: 10 }}>
        <input
          placeholder="Titre"
          onChange={this.update.bind(this, 'title')}
          type="text"
          value={article.title || ''}
          style={{ display: 'block', margin: 10, fontSize: '2em', width: 500 }}
        />
        <textarea
          placeholder="Sous-titre"
          onChange={this.update.bind(this, 'subtitle')}
          type="text"
          value={article.subtitle || ''}
          style={{ display: 'block', margin: 10, fontSize: '1.1em', fontWeight: 'bold', width: 500 }}
        />
        <Modules
          modules={article.modules}
          onAdd={this.addModule}
          onRemove={this.removeModule}
          onUpdate={this.updateModule}
        />
      </div>
    )
  }
}
export default connect(
  ({ article }) => ({ article }),
  (dispatch) => ({
    actions: {
      articles: bindActionCreators(articlesActionCreators, dispatch),
    }
  })
)(Article);
