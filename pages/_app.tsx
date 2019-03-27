import BaseApp from 'next/app';
import { Container } from 'next/app';
import Head from 'next/head';

import '../assets/scss/base.scss';

interface PropTypes {
  pageProp: object;
  Component: JSX.Element;
}

class App extends BaseApp<PropTypes> {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const {
      Component,
      pageProps,
    } = this.props;

    const { pageTitle } = pageProps;

    return (
      <Container>
        <Head>
          {pageTitle ? <title>{`${pageTitle} - Hello Next!`}</title> : <title>Hello Next!</title>}
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default App;
