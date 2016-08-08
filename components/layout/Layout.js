import React from 'react';
import Header from './Header';

import Contact from '../elements/contactForm.js';
import Portfolio from '../content/portfolio.js';
import Technologies from '../content/technologies.js';

class SkillsGrid extends React.Component {
  render(){
    return(
        <div>
            <Technologies />
        </div>
    )
  }
}

class Layout extends React.Component {
  componentDidMount() {
  //  window.componentHandler.upgradeElement(this.refs.root);
  }
  componentWillUnmount() {
 //   window.componentHandler.downgradeElements(this.refs.root);
  }
  render() {
    return (
      <div className="the-layout" ref="root">
        <section className="top-header">
        <div className="container">
          <Header />
        </div>
        </section>
        <section className="works">
          <Portfolio />
        </section>
        <section className="contact">
          <Contact />
        </section>
      </div>
    );
  }
}

export default Layout;
