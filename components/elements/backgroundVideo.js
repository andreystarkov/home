/*
* @Author: Andrey Starkov
* @Date:   2016-06-12 14:49:54
* @Last Modified by:   Andrey Starkov
* @Last Modified time: 2016-08-02 14:41:21
*/

import React from 'react';
import ReactDOM from 'react-dom';
import settings from '../global/settings';
import Button from 'muicss/lib/react/button';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Container from 'muicss/lib/react/container';

//import velocity from 'velocity';

function openInNewTab(url) {
  var win = window.open(url, '_blank');

}

class BackgroundVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        clicked: false
    };
  }
  toggleFn(e){
    if(this.state.clicked) {
      this.setState({clicked:false})
    } else this.setState({
        clicked: true
    });
  }
  componentDidUpdate(){
    if( this.state.clicked ) {
      $('body').css({'overflow-y': 'hidden'});
      classNames += ' clicked';
    } else {
      $('body').css({'overflow-y': 'scroll'});
    }
  }
  _postVideo(){
    var path = settings.videos.url+this.props.video+'/'+this.props.video;
    var poster = path+'.jpg';
    console.log('_postVideo: ', path, poster);
    if( this.props.video ){
      return(
      <div className="video-container">
        <div className="video-overlay" style={{backgroundImage: 'url('+poster+')'}}></div>
        <video className="the-video" loop poster={poster}>
          <source src={path+'.m4v'} type='video/mp4; codecs=avc1.42E01E, mp4a.40.2"' />
          <source src={path+'.webm'} type='video/webm; codecs="vp8, vorbis"' />
          <source src={path+'.ogv'} type="video/ogg" />
          <source src={path+'.mp4'} />
        </video>
      </div>
      )
    } else {
      return(
        <div className="video-overlay" style={{backgroundImage: 'url('+poster+')'}}></div>
      )
    }
  }
  _postArticle(){
    if(this.props.article){
      return(
        <div className="pf-article">
          <Container>
            <p>{this.props.article}</p>
          </Container>
        </div>
      )
    }
  }
  _postDescription(){
    return (
      <div className="more">
        <div className="pf-description">
          <h2>{this.props.name}</h2>
          <span>{this.props.description}</span>
        </div>
        <div className="pf-routes">
         <a href={this.props.github} target="_blank" className='mui-btn mui-btn--raised'>
          <i className="fa fa-github" /> <span>Github</span>
         </a>
          <a href={this.props.live} target="_blank" className='mui-btn mui-btn--raised'>
            <i className="fa fa-play" /> <span>Демо</span>
         </a>
        </div>
        {this._postArticle()}
      </div>
    )
  }
  render(){

    var classNames = 'pf-item background-video';
    if (this.state.clicked) classNames += ' clicked';

    return(
    <div className={classNames} id={'item-'+this.props.unique}>
    <div onClick={this.toggleFn.bind(this)} className="pf-link">
      <div className="click-overlay" />
      {this._postVideo()}
      {this._postDescription()}
    </div>
    </div>
    )

  }
}

export default BackgroundVideo;
