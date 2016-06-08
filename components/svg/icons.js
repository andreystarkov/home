/*
* @Author: Andrey Starkov
* @Date:   2016-06-01 12:59:32
* @Last Modified by:   Andrey Starkov
* @Last Modified time: 2016-06-08 15:56:40
*/

import React from 'react';

class SVGReactIcon extends React.Component {
  render(){
    return(
      <svg className="svg-icon-react" viewBox="0 0 3925 3525" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <circle stroke="none" className="path-main-fill" fill="#67DAF9" cx="1960" cy="1760" r="355"></circle>
          <g stroke="#67DAF9" className="path-main-stroke" stroke-width="170" fill="none">
              <ellipse cx="2575" cy="545" rx="715" ry="1875" transform="rotate(30)"></ellipse>
              <ellipse cx="1760" cy="-1960" rx="715" ry="1875" transform="rotate(90)"></ellipse>
              <ellipse cx="-815" cy="-2505" rx="715" ry="1875" transform="rotate(-210)"></ellipse>
          </g>
      </svg>
    )
  }
}

export default SVGReactIcon;
