import React from 'react';
import Navigation from './Navigation';
import SVGLogo from '../svg/logo.js';
import Technologies from '../content/technologies.js';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Container from 'muicss/lib/react/container';

class Header extends React.Component {

  render() {
    return (
      <header className="the-header align-center">
        <div className="container">
          <Row>
            <Col md="3">
              <div className="the-logo">
                <SVGLogo />
              </div>
            </Col>
            <Col md="8">
              <Technologies />
            </Col>
          </Row>
        </div>
      </header>
    );
  }

}

export default Header;
