import React, { Component } from 'react';
import ColombiaMap from "./ColombiaMap";
import d3 from "d3";

export default class OL extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <canvas width="600" height="600" style="border:1px solid #000000;"/>
      </div>
    );
  }

  componentWillUpdate(newProps) {

  }
}
