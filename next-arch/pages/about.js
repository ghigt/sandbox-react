import Layout from 'components/layout';

export default class Index extends React.Component {

  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    console.log('hellooooo');
    return { userAgent };
  }

  render() {
    return (
      <Layout>
        <div className="yolo">
          Hello world {this.props.userAgent}
        </div>
      </Layout>
    )
  }
}
