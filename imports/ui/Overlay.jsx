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
    let x = info.coords[0];
    let y = info.coords[1];

    canvas.beginPath();
    if (this.props.figure === 'S') {
      // Draw a square
      canvas.rect(x-3, y-3, 6, 6);
    } else if (this.props.figure === 'C') {
      // Draw a circle
      canvas.arc(x, y, 3, 0, 2*Math.PI);
    } else {
      // Draw a triangle
      canvas.moveTo(x-3, y-3);
      canvas.lineTo(x+3, y-3);
      canvas.lineTo(x, y+3);
      canvas.lineTo(x-3, y-3);
    }
    canvas.fillStyle = '#' + info.color;
    canvas.fill()
    canvas.stroke();
  }

  render() {
    return (
        <div className="row" style={{marginLeft: '0px', position: 'absolute', 'pointerEvents': 'none'}}>
          <canvas id="c" width="600" height="600"/>
        </div>
    );
  }

  componentDidMount() {
    this.props.coordinates.forEach((coord) => {
      this.drawTweet(coord);
    });
  }

  componentDidUpdate() {
    let c = document.getElementById("c");
    let canvas = c.getContext("2d");
    // Clear the canvas to avoid repainting tweets
    canvas.clearRect(0, 0, 600, 600)
    this.props.coordinates.forEach((coord) => {
      this.drawTweet(coord);
    });
  }
}
