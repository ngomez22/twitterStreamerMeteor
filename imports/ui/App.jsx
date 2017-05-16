import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { Meteor } from "meteor/meteor";
import { createContainer } from "meteor/react-meteor-data";

import ColombiaMap from "./ColombiaMap.jsx";
import Overlay from "./Overlay.jsx";
import TweetsResults from "./TweetsResults.jsx";
import { Tweets } from "../api/Tweets.js";

import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.projection = null;
  }

  getCoordinates() {
    return this.props.tweets.map(tweet => {
      return this.projection(tweet.coordinates.coordinates);
    });
  }

  getProjection() {
    return this.projection
  }

  setProjection(p) {
    this.projection = p;
  }

  changeQuery(evt) {
    if (evt.key !== "Enter") {
      return;
    }
    // "this" will change in the method call, so I need to save it
    let component = this;

    console.log(evt.target.value);
    Meteor.call("twitter.stream", evt.target.value);
  }

  render() {
    return (
      <div>
        <div className="row center">
          <h1>Final exam</h1>
        </div>
        <div>
          <Overlay
            coordinates={this.getCoordinates()}
          />
          <ColombiaMap
            width="600"
            height="600"
            data={{RISARALDA:10}}
            setProj={this.setProjection.bind(this)}
            style={{}}
          />
        </div>
        <input type="text" onKeyPress={this.changeQuery.bind(this)} placeholder="Query"/>
        { this.props && this.props.err ?
          <div>Error: {this.props.err}</div> :
          <span></span>
        }
        <h2>Results:</h2>
        {this.props && this.props.tweets ?
          <TweetsResults tweets={this.props.tweets}/> :
          <p>Enter a query</p>
        }
      </div>
    );
  }
}

App.propTypes = {
  tweets : PropTypes.array.isRequired
};

export default AppContainer = createContainer(() => {
  Meteor.subscribe("tweets");
  return {
    tweets: Tweets.find({}).fetch()
  };
}, App);
