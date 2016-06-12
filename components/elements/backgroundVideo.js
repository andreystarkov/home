/*
* @Author: Andrey Starkov
* @Date:   2016-06-12 14:49:54
* @Last Modified by:   Andrey Starkov
* @Last Modified time: 2016-06-12 21:23:15
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
        <div className="video-overlay" style={{backgroundImage: 'url('+poster+')'}}></div>
        <video className="the-video" loop poster={poster}>
          <source src={path+'.m4v'} type='video/mp4; codecs=avc1.42E01E, mp4a.40.2"' />
          <source src={path+'.webm'} type='video/webm; codecs="vp8, vorbis"' />
          <source src={path+'.ogv'} type="video/ogg" />
          <source src={path+'.mp4'} />
        </video>
    </div>
    )
  }
}

export default BackgroundVideo;
