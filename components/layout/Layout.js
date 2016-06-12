import React from 'react';
import Header from './Header';

import Portfolio from '../content/portfolio.js';
import Technologies from '../content/technologies.js';

class SkillsGrid extends React.Component {
  render(){
    return(
          <div className="container">
            <h2>Технологии</h2>
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
        <section className="skills">
          <SkillsGrid />
        </section>
        <section className="works">
          <Portfolio />
        </section>

      </div>
    );
  }
}

export default Layout;
