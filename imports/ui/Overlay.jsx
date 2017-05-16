import React, { Component } from 'react';

export default class Overlay extends Component {

  constructor(props) {
    super(props);
    this.state = {
      latest: 0
    }
  }

  drawTweet(info) {
    let c = document.getElementById("c");
    let canvas = c.getContext("2d");
    canvas.beginPath();
    if (info.retweeted) {
      ctx.rect(info.coords[0]-3, info.coords[0]-3, 6, 6);
    } else {
      canvas.arc(info.coords[0], info.coords[1], 3, 0, 2*Math.PI);
    }
    canvas.fillStyle = '#' + info.color;
    canvas.fill()
    canvas.stroke();
  }

  render() {
    return (
      <div style={{position: 'absolute', 'pointer-events': 'none'}}>
        <canvas id="c" width="600" height="600"/>
        {

        }
      </div>
    );
  }

  componentDidMount() {
    this.props.coordinates.forEach((coord) => {
      this.drawTweet(coord);
    });
  }

  componentDidUpdate() {
    this.props.coordinates.forEach((coord) => {
      this.drawTweet(coord);
    });
  }
}
