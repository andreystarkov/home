import React from 'react';
import Navigation from './Navigation';
import SVGLogo from '../svg/logo.js';

const {Grid, Row, Col} = require('react-flexbox-grid');

class Header extends React.Component {

  render() {
    return (
      <header className="the-header align-center">
        <div className="container">
          <div className="the-logo">
            <SVGLogo />
          </div>

          <div className="description">

          </div>

        </div>
      </header>
    );
  }

}

/*

          <Grid>
            <Row>
              <Col xs={4} md={4}>
                <h3>Андрей Старков</h3>
              </Col>
            </Row>
          </Grid>
 */

export default Header;
