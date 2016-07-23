/*
* @Author: Andrey Starkov
* @Date:   2016-06-12 14:49:54
* @Last Modified by:   Andrey Starkov
* @Last Modified time: 2016-07-23 18:55:45
*/

import React from 'react';
import ReactDOM from 'react-dom';
import settings from '../global/settings';

class BackgroundVideo extends React.Component {
  render(){
    var path = settings.videos.url+this.props.video+'/'+this.props.video;
    var poster = path+'.jpg';
    return(
    <div className="background-video">
    <a className="pf-link" href={this.props.live} target="_blank">
      <div className="pf-description">
        <h2>{this.props.name}</h2>
        <span>{this.props.description}</span>
      </div>
      <div className="pf-article">
        {this.props.article || ''}
      </div>
      <div className="links-list">
          <a href={this.props.github} target="_blank">
            <i className="fa fa-github" />
          </a>
          <a href={this.props.live} target="_blank">
            <i className="fa fa-play" />
          </a>
      </div>
      <div className="video-overlay" style={{backgroundImage: 'url('+poster+')'}}></div>
      <video className="the-video" loop poster={poster}>
        <source src={path+'.m4v'} type='video/mp4; codecs=avc1.42E01E, mp4a.40.2"' />
        <source src={path+'.webm'} type='video/webm; codecs="vp8, vorbis"' />
        <source src={path+'.ogv'} type="video/ogg" />
        <source src={path+'.mp4'} />
      </video>
    </a>
    </div>
    )
  }
}

export default BackgroundVideo;
