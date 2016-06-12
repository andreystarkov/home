/*
* @Author: Andrey Starkov
* @Date:   2016-06-12 11:01:23
* @Last Modified by:   Andrey Starkov
* @Last Modified time: 2016-06-12 21:19:51
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
        $('video', this).get(0).play();

    }

    function hideVideo(e) {
        $('video', this).get(0).pause();
    }
  }
  render(){
    var xs = 4, md = 4, lg = 6;
    return(
    <div className="seamless-grid">
    <Container fluid={{true}}>
      <Row>
        <Col xs={xs} md={md} lg={lg}>
          <BackgroundVideo video="quickly" />
        </Col>
        <Col xs={xs} md={md} lg={lg}>
          <BackgroundVideo video="m-restorator" />
        </Col>
        <Col xs={xs} md={md} lg={lg}>
          <BackgroundVideo video="kb" />
        </Col>
        <Col xs={xs} md={md} lg={lg}>
          <BackgroundVideo video="fm" />
        </Col>
        <Col xs={xs} md={md} lg={lg}>
          <BackgroundVideo video="ops" />
        </Col>
        <Col xs={xs} md={md} lg={lg}>
          <BackgroundVideo video="m-restorator" />
        </Col>
      </Row>

    </Container>
    </div>
    )
  }
}

export default Portfolio;
