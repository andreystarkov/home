/*
* @Author: Andrey Starkov
* @Date:   2016-06-12 14:49:54
* @Last Modified by:   Andrey Starkov
* @Last Modified time: 2016-07-29 13:05:41
*/

import React from 'react';
import ReactDOM from 'react-dom';
import settings from '../global/settings';
import Button from 'muicss/lib/react/button';
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
 //   console.log(this.state);
    console.log(e, 'dsds');
    if(this.state.clicked) {
      this.setState({clicked:false})
    } else this.setState({
        clicked: true
    });
  }
  componentDidUpdate(){
    if(this.state.clicked){
      var the = $('item-'+this.props.unique);
     // the.velocity('transition.flipXIn');
    } else {

    }
  }
  render(){
    var classNames = 'pf-item background-video';

    if( this.state.clicked ) classNames += ' clicked';

    var path = settings.videos.url+this.props.video+'/'+this.props.video;
    var poster = path+'.jpg';
    return(
    <div className={classNames} id={'item-'+this.props.unique}>
    <div onClick={this.toggleFn.bind(this)} className="pf-link">
      <div className="click-overlay">

      </div>
      <div className="video-overlay" style={{backgroundImage: 'url('+poster+')'}}></div>
      <video className="the-video" loop poster={poster}>
        <source src={path+'.m4v'} type='video/mp4; codecs=avc1.42E01E, mp4a.40.2"' />
        <source src={path+'.webm'} type='video/webm; codecs="vp8, vorbis"' />
        <source src={path+'.ogv'} type="video/ogg" />
        <source src={path+'.mp4'} />
      </video>
      <div className="more">
        <div className="pf-description">
          <h2>{this.props.name}</h2>
          <span>{this.props.description}</span>
        </div>
        <div className="pf-article">
          {this.props.article || ''}
        </div>
        <div className="pf-routes">
         <a href={this.props.github} target="_blank" className='mui-btn mui-btn--raised'>
          <i className="fa fa-github" /> <span>Github</span>
         </a>
          <a href={this.props.live} target="_blank" className='mui-btn mui-btn--raised'>
            <i className="fa fa-play" /> <span>Демо</span>
         </a>
        </div>
      </div>
    </div>
    </div>
    )
  }
}

export default BackgroundVideo;
