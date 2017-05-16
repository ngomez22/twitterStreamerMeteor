import React, { Component } from 'react';

export default class Overlay extends Component {

  constructor(props) {
    super(props);
  }

  drawTweet(coords) {
    let c = document.getElementById("c");
    let canvas = c.getContext("2d");
    canvas.beginPath();
    canvas.arc(coords[0], coords[1], 3, 0, 2*Math.PI);
    canvas.stroke();
  }

  render() {
    return (
      <div style={{position: 'absolute', 'pointer-events': 'none'}}>
        <canvas id="c" width="600" height="600"/>
        {
          this.props.coordinates.forEach((coord) => {
            this.drawTweet(coord);
          })
        }
      </div>
    );
  }

  componentWillUpdate(newProps) {
  }
}
