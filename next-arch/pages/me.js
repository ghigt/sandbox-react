import Layout from 'components/layout';
import 'isomorphic-fetch'

export default class Index extends React.Component {

  static async getInitialProps({ query }) {
    return { name: query.name };
  }

  render() {
    const { name } = this.props;

    return (
      <Layout title="Me">
        <div>
          Hello {name}
        </div>
      </Layout>
    )
  }
}
