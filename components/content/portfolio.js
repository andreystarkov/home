/*
* @Author: Andrey Starkov
* @Date:   2016-06-12 11:01:23
* @Last Modified by:   Andrey Starkov
* @Last Modified time: 2016-07-22 14:20:05
*/
import React from 'react';
import ReactDOM from 'react-dom';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Container from 'muicss/lib/react/container';
import ClientLogos from '../icons/clients';
import BackgroundVideo from '../elements/backgroundVideo';

class Portfolio extends React.Component {
  componentDidMount(){
    var figure = $(".background-video").hover( hoverVideo, hideVideo );
    function hoverVideo(e) {
       // $('.video-overlay', this).animate({scale:3, opacity:0});
        $('video', this).get(0).play();
    }
    function hideVideo(e) {
      //  $('.video-overlay', this).animate({scale:1, opacity:1});
        $('video', this).get(0).pause();
    }
  }
  render(){
    var xs = 12, md = 6, lg = 6;
    return(
    <div className="seamless-grid">
      <Container fluid={{true}}>
        <Row>
          <Col xs={xs} md={md} lg={lg}>
            <BackgroundVideo video="quickly" link="https://github.com/andreystarkov/quickly" />
          </Col>
          <Col xs={xs} md={md} lg={lg}>
            <BackgroundVideo video="m-restorator" link="http://m-restorator.ru/" />
          </Col>
          <Col xs={xs} md={md} lg={lg}>
            <BackgroundVideo video="kb" link="http://kirovskiebani.ru/" />
          </Col>
          <Col xs={xs} md={md} lg={lg}>
            <BackgroundVideo video="fm" link="http://finchmovingservices.com/" />
          </Col>
          <Col xs={xs} md={md} lg={lg}>
            <BackgroundVideo video="ops" link="http://orenops.ru/"/>
          </Col>
          <Col xs={xs} md={md} lg={lg}>
            <BackgroundVideo video="challenge" link="https://github.com/andreystarkov/challenge" />
          </Col>
        </Row>
      </Container>
    </div>
    )
  }
}

export default Portfolio;
