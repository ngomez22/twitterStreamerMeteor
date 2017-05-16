import React, { Component } from 'react';
import ColombiaMap from "./ColombiaMap";
import d3 from "d3";

export default class OL extends Component {

  constructor(props) {
    super(props);
  }

  drawTweet() {
    let c = document.getElementById("myCanvas");
    let canvas = c.getContext("2d");
    canvas.beginPath();
    canvas.arc(95,50,40,0,2*Math.PI);
    canvas.stroke();
  }

  render() {
    return (
      <div>
        <canvas id="overlay" width="600" height="600" style="border:1px solid #000000;"/>
      </div>
    );
  }

  componentWillUpdate(newProps) {

  }
}
