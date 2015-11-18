import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import marked from 'marked'
import 'whatwg-fetch'

class Comment extends React.Component {
  constructor(props) {
    super(props)
    this.rawMarkup = this.rawMarkup.bind(this)
  }

  rawMarkup() {
    return { __html: marked(this.props.children.toString(), {sanitize: true}) }
  }

  render() {
    console.log('Comment: render()')
    return <div className="comment">
      <h2 className="commentAuthor">
        {this.props.author}
      </h2>
      <span dangerouslySetInnerHTML={this.rawMarkup()} />
    </div>
  }
}

class CommentList extends Component {
  render() {
    console.log('CommentList: render()')
    return <div className="commentList">
      {this.props.data.map(comment =>
        <Comment author={comment.author}
                 key={comment.id}>
          {comment.text}
        </Comment>)}
    </div>
  }
}

class CommentForm extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    var author = this.refs.author.value.trim()
    var text = this.refs.text.value.trim()
    if (!text || !author) return
    this.props.onCommentSubmit({author: author, text: text})
    this.refs.author.value = ''
    this.refs.text.value = ''
  }

  render() {
    console.log('CommentForm: render()')
    return <form className="commentForm"
                 onSubmit={this.handleSubmit}>
      <input ref="author" type="text" placeholder="Your Name" />
      <input ref="text" type="text" placeholder="Say something..." />
      <input type="submit" value="Post" />
    </form>
  }
}

class CommentBox extends Component {
  constructor(props) {
    super(props)
    console.log('CommentBox: constructor()')
    this.state = {data: []}
    this.loadComments = this.loadComments.bind(this)
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this)
  }

  loadComments() {
    console.log('url: ', this.props.url);
    fetch(this.props.url)
      .then(res => res.json())
      .then(data => this.setState({data}))
      .catch(e => console.log('parsing failed', e))
  }

  handleCommentSubmit(comment) {
    const comments = this.state.data
    comment.id = Date.now()
    const newComments = comments.concat([comment])
    this.setState({data: newComments})
    fetch(this.props.url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(comment)
    })
    .then(res => res.json())
    .then(res => console.log('POST success'))
    .catch(e => console.log('POST failed'))
  }

  componentDidMount() {
    console.log('CommentBox: componentDidMount()')
    this.loadComments()
    setInterval(this.loadComments, this.props.pollInterval)
  }

  render() {
    console.log('CommentBox: render()')
    return <div className="commentBox">
      <h1>Comments</h1>
      <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
      <hr />
      <CommentList data={this.state.data} />
    </div>
  }
}

ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={10000} />,
  document.getElementById('app')
)
