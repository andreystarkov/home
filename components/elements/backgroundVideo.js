/*
* @Author: Andrey Starkov
* @Date:   2016-06-12 14:49:54
* @Last Modified by:   Andrey Starkov
* @Last Modified time: 2016-08-08 19:02:53
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

function aniFullscreen(what) {
    var imgtodrag = $(what);
    if (imgtodrag) {
        var imgclone = imgtodrag.clone()
        .addClass('notransition')
        .offset({
            top: imgtodrag.offset().top,
            left: imgtodrag.offset().left
        })
        .css({
            'opacity': '0.6',
            'position': 'absolute',
            'height': imgtodrag.outerHeight(),
            'width': imgtodrag.outerWidth(),
            'z-index': '8'
        })
        .appendTo($('body'))
        .velocity({
            'top': cart.offset().top + 10,
            'left': cart.offset().left + 10,
            'width': 75,
            'height': 75,
        }, 400, "easeOutSine", function() {
            // what?
        });


        imgclone.animate({
            'width': 0,
            'height': 0
        }, function() {
            $(this).detach()
        });
    }
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
    } else {
      $('body').css({'overflow-y': 'scroll'});
    }
  }
  componentDidMount(){
    var figure = $('#item-'+this.props.unique).hover( hoverVideo, hideVideo );
    function hoverVideo(e) {
        if( $('video', this).length ){
          $('video', this).show();
          $('video', this).get(0).play();
        }
    }
    function hideVideo(e) {
        if( $('video', this).length ){
          $('video', this).hide();
          $('video', this).get(0).pause();
        }
    }
  }
  _postVideo(){
    console.log('_postVideo props:', this.props);

    if( this.props.video ){

      var path = settings.videos.url+this.props.video+'/'+this.props.video;
      var poster = path+'.jpg';

      return(
        <div className="video-container">
          <div className="video-overlay" style={{backgroundImage: 'url('+poster+')'}}></div>
          <video id={'video-'+this.props.unique} className="the-video" loop poster={poster}>
            <source src={path+'.m4v'} type='video/mp4; codecs=avc1.42E01E, mp4a.40.2"' />
            <source src={path+'.webm'} type='video/webm; codecs="vp8, vorbis"' />
            <source src={path+'.ogv'} type="video/ogg" />
            <source src={path+'.mp4'} />
          </video>
        </div>
      )
    } else {

      var path = settings.videos.url+this.props.folder+'/'+this.props.folder;
      var poster = path+'.jpg';

      return(
        <div className="picture-overlay">
          <img src={poster} />
        </div>
      )

    }
  }

  _postArticle(){
    var poster = settings.videos.url+this.props.folder+'/'+this.props.folder+".jpg";
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
