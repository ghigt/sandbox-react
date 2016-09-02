import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

const initialState = {
  videos: {
    ids: [],
    items: {},
    page: 1,
  }
};

function videosReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_VIDEOS':
      console.log('FETCH_VIDEOS', action);
      const { page, videos } = action;
      const { ids = [], items = {} } = videos;

      return { videos: { ids, items, page } };
    default:
      return state;
  }
}

const all = ({ page = 1 }) => {
  const pages = [
    {
      ids: [ 'd9a42ddc', 'a5' ],
      items: {
        d9a42ddc: { id: 'd9a42ddc', title: 'd9a42ddc' },
        a5:       { id: 'a5', title: 'a5' },
      },
    }, {
      ids: [ 'lsdfwml', 'sd5f46sd' ],
      items: {
        lsdfwml:  { id: 'lsdfwml', title: 'lsdfwml' },
        sd5f46sd: { id: 'sd5f46sd', title: 'sd5f46sd' },
      },
    }, {
      ids: [ 'y03385ca1b9d2', 'a1b9d2' ],
      items: {
        y03385ca1b9d2: { id: 'y03385ca1b9d2', title: 'y03385ca1b9d2' },
        a1b9d2:        { id: 'a1b9d2', title: 'a1b9d2' },
      },
    },
  ];

  return Promise.resolve(pages[page - 1]);
};

class App extends Component {

  state = {
    media: null,
    showModal: false,
  };

  update(path, value) {
    this.setState({ media: { ...this.state.media, [path]: value } });
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  onChooseVideo(media) {
    this.setState({ media: media.id });
  }

  render() {
    console.log('[ContentEdit] render');

    return (
      <div>
        <button onClick={::this.toggleModal}>Modifier la vidéo</button>
        {this.state.media}

        {!this.state.showModal ? null : (
          <PickVideo
            onRequestClose={::this.toggleModal}
            onSelect={::this.onChooseVideo}
            open={this.state.showModal}
          />
        )}
      </div>
    );
  }
}

class PickVideoNo extends Component {

  fetch(page = this.props.page) {
    this.props.fetchVideos({ page, pageCount: 2 });
  }

  onSelect(video) {
    this.props.onRequestClose();
    this.props.onSelect(video);
  }

  render() {
    console.log('props', this.props);
    return (
      <div>
        <ul>
          {this.props.ids.map((id) => (
            <li key={id}>
              <Video id={id} onSelect={::this.onSelect} />
            </li>
          ))}
        </ul>
        <button onClick={this.fetch.bind(this, this.props.page + 1)}>
          fetch page courante
        </button>
        <button onClick={this.fetch.bind(this, this.props.page + 1)}>
          fetch page suivante
        </button>
      </div>
    );
  }
}
const PickVideo = connect(
  ({ videos: { ids, page } }) => ({ ids, page }),
  (dispatch) => ({
    fetchVideos: ({ page }) =>
      all({ page }).then((videos) => {
        console.log('fetchVideos', videos);
        dispatch({ type: 'FETCH_VIDEOS', page, videos });
      }),
  }),
)(PickVideoNo);

class VideoNo extends Component {
  render() {
    const { onSelect, video, video: { title } } = this.props;

    return (
      <div>
        <button onClick={onSelect.bind(this, video)}>{title}</button>
      </div>
    );
  }
}
const Video = connect(({ videos: { items } }, { id }) =>
  ({ video: items[id] })
)(VideoNo);



ReactDOM.render(
  <Provider store={createStore(videosReducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
