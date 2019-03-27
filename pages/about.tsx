import React, { Component } from 'react';

import Header from '../components/common/Header';

class About extends Component {
  static getInitialProps() {
    return { pageTitle: 'About' };
  }

  render() {
    return (
      <div>
        <Header />
        <p>This is the about page.</p>
      </div>
    );
  }
}

export default About;
