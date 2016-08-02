import React from 'react';
import Navigation from './Navigation';
import SVGLogo from '../svg/logo.js';
import Technologies from '../content/technologies.js';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Container from 'muicss/lib/react/container';
import anime from 'animejs';

export function randomInt(min, max) {
  var i = (Math.random() * 32768) >>> 0;
  return (i % (min - max)) + min;
}

class Header extends React.Component {

  componentDidMount() {
    anime({
      targets: '#mv',
      translateX: '53rem',
      duration: 3000,
      translateY: {
        value: '11rem',
        delay: function(el, index) {
          var delay = randomInt(100, 600);
          console.log('anime.js: delay = ', delay);
          return delay;
        },
        easing: 'easeInOutQuad',
        duration: 900
      },
      rotateY: {
        value: 180,
        transformOrigin: '0% 50%',
        duration: 300,
        delay: 200,
        easing: 'easeInOutQuad'
      },
      scale: {
        value: 2,
        delay: 150,
        duration: 850,
        easing: 'easeInOutExpo',
      },
      loop: true,
      direction: 'alternate'
    });
  }

  render() {
    var elStyles = {
      width: '3em',
      position: 'absolute',
      left: '2rem',
      borderRadius: '500px',
      height: '3em',
      backgroundColor: 'rgba(255,255,255,0.2)'
    };
    return (
      <header className="the-header align-center">
      <div className="absolute-wrapper">
        <div className="container">
          <Row>
            <Col md="12">
              <div className="the-logo">
                <div id="mv" style={elStyles}></div>
                <SVGLogo id="the-logo" />
              </div>
            </Col>
          </Row>
          <Technologies />

        </div>
      </div>
      </header>
    );
  }

}

export default Header;
