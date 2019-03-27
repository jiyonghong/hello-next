import React, { Component } from 'react';
import { withRouter, SingletonRouter } from 'next/router';
import Header from '../components/common/Header';

interface PropTypes {
  router: SingletonRouter;
}

class Post extends Component<PropTypes> {
  static getInitialProps({ query }) {
    return { pageTitle: `Post ${query.id}` };
  }

  render() {
    const {
      router,
    } = this.props;

    return (
      <div>
        <Header />
        <h1>{router.query.id}</h1>
      </div>
    );
  }
}

export default withRouter(Post);
