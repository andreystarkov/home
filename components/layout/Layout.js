import React from 'react';
import Header from './Header';
import Icons from '../icons/devicons.js';
import ClientLogos from '../icons/clients.js';

const {Grid, Row, Col} = require('react-flexbox-grid');

class SkillsGrid extends React.Component {
  render(){
    return(
          <div className="container">
            <h2>Технологии</h2>
          <Grid>
            <Row>
              <Col xs={1} md={1}>
                <div className="known-tech">
                  <Icons icon="react" />
                </div>
              </Col>
              <Col xs={1} md={1}>
                <div className="known-tech">
                  <Icons icon="javascript" />
                </div>
              </Col>
              <Col xs={1} md={1}>
                <div className="known-tech">
                  <Icons icon="jquery" />
                </div>
              </Col>
              <Col xs={1} md={1}>
                <div className="known-tech">
                  <Icons icon="html5" />
                </div>
              </Col>
              <Col xs={1} md={1}>
                <div className="known-tech">
                  <Icons icon="css3" />
                </div>
              </Col>
              <Col xs={1} md={1}>
                <div className="known-tech">
                  <Icons icon="sass" />
                </div>
              </Col>
              <Col xs={1} md={1}>
                <div className="known-tech">
                  <Icons icon="less" />
                </div>
              </Col>
              <Col xs={1} md={1}>
                <div className="known-tech">
                  <Icons icon="wordpress" />
                </div>
              </Col>
            </Row>
            <Row className="known">
              <Col xs={1} md={1}>
                <div className="known-tech">
                  <Icons icon="node" />
                </div>
              </Col>
              <Col xs={1} md={1}>
                <div className="known-tech">
                  <Icons icon="php" />
                </div>
              </Col>
              <Col xs={1} md={1}>
                <div className="known-tech">
                  <Icons icon="webkit" />
                </div>
              </Col>
              <Col xs={1} md={1}>
                <div className="known-tech">
                  <Icons icon="gulp" />
                </div>
              </Col>
              <Col xs={1} md={1}>
                <div className="known-tech">
                  <Icons icon="git" />
                </div>
              </Col>
              <Col xs={1} md={1}>
                <div className="known-tech">
                  <Icons icon="photoshop" />
                </div>
              </Col>
              <Col xs={1} md={1}>
                <div className="known-tech">
                  <Icons icon="linux-detail" />
                </div>
              </Col>
              <Col xs={1} md={1}>
                <div className="known-tech">
                  <Icons icon="mysql" />
                </div>
              </Col>
            </Row>
          </Grid>
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
          <h2>Результаты</h2>
          <Grid className="known">
            <Row>
              <Col xs={2} md={2}>
                <ClientLogos icon="m-restorator" />
              </Col>
              <Col xs={2} md={2}>
                <ClientLogos icon="quickly" />
              </Col>
            </Row>
          </Grid>
        </section>
      </div>


    );
  }
}

export default Layout;
