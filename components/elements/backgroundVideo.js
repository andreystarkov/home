/*
* @Author: Andrey Starkov
* @Date:   2016-06-12 14:49:54
* @Last Modified by:   Andrey Starkov
* @Last Modified time: 2016-07-22 17:07:10
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
    <a className="pf-link" href={this.props.link} target="_blank">
{/*        <div className="links-list">
          <a href={this.props.link} target="_blank">
            <i className="fa fa-github" />
          </a>
          <a href={this.props.link} target="_blank">
            <i className="fa fa-play" />
          </a>
        </div>*/}
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
