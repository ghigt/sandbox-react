import Layout from 'components/layout';
import 'isomorphic-fetch'

export default class Index extends React.Component {

  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const json = await res.json()

    return { stars: json.stargazers_count, userAgent };
  }

  state = {
    interval: null,
    num: 0
  }

  componentDidMount() {
    const interval = setInterval(() => {
      this.setState(({num}) => ({ num: num + 1}));
    }, 1000);
    this.setState({ interval });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    const { stars, userAgent } = this.props;

    return (
      <Layout>
        <div className="yolo">
          Hello {stars} world {userAgent}
          <p>
            scoped! {this.state.num}
          </p>
          <div>
            <img width="100" src="/static/wallpaper.jpg" />
          </div>

          <style jsx>{`
            p {
              color: blue;
            }
            div {
              background: #ccd;
            }
            .yolo:hover {
              background: #bbb;
            }
            @media (max-width: 600px) {
              div {
                background: blue;
              }
            }
          `}</style>
          <style global jsx>{`
            body {
              background: #eee;
            }
          `}</style>
        </div>
      </Layout>
    )
  }
}
