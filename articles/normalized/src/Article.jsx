import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import uuid from 'uuid';

import * as articlesActionCreators from './actions/articles';
import * as modulesActionCreators from './actions/modules';

import Modules from './Modules';

class Article extends Component {

  constructor(props) {
    super(props);

    this.addModule = this.addModule.bind(this);
    this.removeModule = this.removeModule.bind(this);
  }

  update(field, { target: { value }}) {
    this.props.actions.articles.update(
      `${this.props.article.id}.${field}`,
      value
    );
  }

  addModule() {
    const module = { id: uuid.v4().split('-')[0], name: '' };

    this.props.actions.modules.add(module);
    this.props.actions.articles.updateAdding(
      `${this.props.article.id}.moduleIds`,
      module.id
    );
  }

  removeModule(moduleId) {
    this.props.actions.articles.updateRemoving(
      `${this.props.article.id}.moduleIds`,
      moduleId
    );
    this.props.actions.modules.remove(moduleId);
  }

  render() {
    const { article, tags } = this.props;
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
          ids={article.moduleIds}
          onAdd={this.addModule}
          onRemove={this.removeModule}
        />
        <h2>Mes tags :</h2>
        <ul>
          {article.tagIds.map((id) => (
            <li key={id}>{tags[id].name}</li>
          ))}
        </ul>
      </div>
    )
  }
}
export default connect(
  ({ articles: { items }, tags: { items: tagItems } }, { id }) =>
    ({ article: items[id], tags: tagItems }),
  (dispatch) => ({
    actions: {
      articles: bindActionCreators(articlesActionCreators, dispatch),
      modules: bindActionCreators(modulesActionCreators, dispatch),
    }
  })
)(Article);
