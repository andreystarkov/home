/*
* @Author: Andrey Starkov
* @Date:   2016-06-12 11:04:11
* @Last Modified by:   Andrey Starkov
* @Last Modified time: 2016-07-22 14:00:20
*/

import React from 'react';
import ReactDOM from 'react-dom';
import Icons from '../icons/devicons.js';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Container from 'muicss/lib/react/container';

class Technologies extends React.Component {
  render(){
      var xs = 6, md = 2, lg = 2;
      return(
          <Container className="the-known">
            <Row>
              <Col xs={xs} md={md} lg={lg}>
                <div className="known-tech">
                  <Icons icon="react" />
                </div>
              </Col>
              <Col xs={xs} md={md} lg={lg}>
                <div className="known-tech">
                  <Icons icon="javascript" />
                </div>
              </Col>
              <Col xs={xs} md={md} lg={lg}>
                <div className="known-tech">
                  <Icons icon="jquery" />
                </div>
              </Col>
{/*              <Col xs={xs} md={md} lg={lg}>
                <div className="known-tech">
                  <Icons icon="html5" />
                </div>
              </Col>
              <Col xs={xs} md={md} lg={lg}>
                <div className="known-tech">
                  <Icons icon="css3" />
                </div>
              </Col>*/}
              <Col xs={xs} md={md} lg={lg}>
                <div className="known-tech">
                  <Icons icon="sass" />
                </div>
              </Col>
              <Col xs={xs} md={md} lg={lg}>
                <div className="known-tech">
                  <Icons icon="less" />
                </div>
              </Col>
              <Col xs={xs} md={md} lg={lg}>
                <div className="known-tech">
                  <Icons icon="wordpress" />
                </div>
              </Col>
            </Row>
            <Row className="known">
              <Col xs={xs} md={md} lg={lg}>
                <div className="known-tech">
                  <Icons icon="node" />
                </div>
              </Col>
              <Col xs={xs} md={md} lg={lg}>
                <div className="known-tech">
                  <Icons icon="php" />
                </div>
              </Col>
              <Col xs={xs} md={md} lg={lg}>
                <div className="known-tech">
                  <Icons icon="webkit" />
                </div>
              </Col>
              <Col xs={xs} md={md} lg={lg}>
                <div className="known-tech">
                  <Icons icon="gulp" />
                </div>
              </Col>
              <Col xs={xs} md={md} lg={lg}>
                <div className="known-tech">
                  <Icons icon="git" />
                </div>
              </Col>
{/*              <Col xs={xs} md={md} lg={lg}>
                <div className="known-tech">
                  <Icons icon="photoshop" />
                </div>
              </Col>*/}
              <Col xs={xs} md={md} lg={lg}>
                <div className="known-tech">
                  <Icons icon="linux-detail" />
                </div>
              </Col>
{/*              <Col xs={xs} md={md} lg={lg}>
                <div className="known-tech">
                  <Icons icon="mysql" />
                </div>
              </Col>*/}
            </Row>
          </Container>
      )
  }
}

export default Technologies;

