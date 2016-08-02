/*
* @Author: Andrey Starkov
* @Date:   2016-06-12 11:01:23
* @Last Modified by:   Andrey Starkov
* @Last Modified time: 2016-08-02 11:53:28
*/
import React from 'react';
import ReactDOM from 'react-dom';
import Reflux from 'reflux';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Container from 'muicss/lib/react/container';
import ClientLogos from '../icons/clients';
import BackgroundVideo from '../elements/backgroundVideo';
import PortfolioStore from '../stores/portfolio';

class Portfolio extends React.Component {
  constructor(props) {
      super(props);
      this.state = {};
      this.store = PortfolioStore
  }
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
    console.log('Portfolio: ', this.store.data);
    var xs = 12, md = 6, lg = 6;

    var output = this.store.data.map(function(the,key){
      console.log(the);
        return(
          <Col xs={xs} md={md} lg={lg} key={key}>
            <BackgroundVideo
            video={the.video}
            name={the.name}
            description={the.description}
            live={the.live}
            github={the.github}
            article={the.article} unique={key} />
          </Col>
        )
    });

    return(
    <div className="seamless-grid">
      <Container fluid={{true}}>
        <Row>
          {output}
        </Row>
      </Container>
    </div>
    )
  }
}

export default Portfolio;
