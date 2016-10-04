import React from 'react'
import Navigation from './Navigation'
import SVGLogo from '../svg/logo'
import ASLogo from '../svg/asLogo'
import Technologies from '../content/technologies'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'
import Container from 'muicss/lib/react/container'
/*import anime from 'animejs'
import initAniEffects from '../animation/initAniEffects'
import aniEffects from '../animation/aniEffects'*/

export function randomInt(min, max) {
  var i = (Math.random() * 32768) >>> 0;
  return (i % (min - max)) + min;
}

function animationTests(){
  anime({
    targets: '#mv',
    translateX: '73rem',
    duration: 15000,
    translateY: {
      value: '6rem',
      delay: function(el, index) {
        var delay = randomInt(100, 600);
        console.log('anime.js: delay = ', delay);
        return delay;
      },
      easing: 'easeInOutQuad',
      duration: 4900
    },
    rotate: {
      value: 280,
      duration: 5300,
      delay: 200,
      easing: 'easeInOutQuad'
    },
    scale: {
      value: 3.6,
      delay: 250,
      duration: 4850,
      easing: 'easeInOutExpo',
    },
    loop: true,
    direction: 'alternate'
  });
}

class Header extends React.Component {

  componentDidMount() {
    // animationTests()
    // initAniEffects();
  }

  render() {
    var elStyles = {
      width: '50%',
      position: 'absolute',
      left: '0',
      top: '0',
      borderRadius: '500px',
      height: '100%',
      backgroundColor: 'rgba(255,255,255,0.2)'
    };
    return (
      <header className="the-header align-center">
      <div className="absolute-wrapper">
        <div className="container">
          <Row>
            <Col md="12">
              <div className="the-logo">
                {/*<div id="mv" style={elStyles}></div>*/}
               {/* <SVGLogo id="the-logo" />*/}
               <ASLogo />
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
