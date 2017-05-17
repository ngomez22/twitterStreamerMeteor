import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { Meteor } from "meteor/meteor";
import { createContainer } from "meteor/react-meteor-data";
import { Well } from "react-bootstrap";

import ColombiaMap from "./ColombiaMap.jsx";
import Overlay from "./Overlay.jsx";
import TweetsResults from "./TweetsResults.jsx";
import { Tweets } from "../api/Tweets.js";

import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      figure: 'C'
    }
    this.projection = null;
  }

  getCoordinates() {
    return this.props.tweets.map(tweet => {
      return {
        id: tweet.id,
        retweeted: tweet.retweeted,
        place: tweet.place,
        color: tweet.user['profile_background_color'],
        coords: this.projection(tweet.coordinates.coordinates)
      }
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

  changeFigure(fig) {
    this.setState({
      figure: fig
    });
  }

  render() {
    return (
      <div>
        <div className="row text-center">
          <h1>Final exam</h1>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Overlay
              coordinates={this.getCoordinates()}
              figure={this.state.figure}
            />
            <ColombiaMap
              width="600"
              height="600"
              data={{RISARALDA:0}}
              setProj={this.setProjection.bind(this)}
            />
            <div className="row">
              <div id="salsa" className="col-md-11">
                <Well>
                  <div>
                    <h2 className="text-center">Choose a figure!</h2>
                    <div className="col-md-4">
                      <button className="btn" onClick={() => {this.changeFigure('C')}}>Circle</button>
                    </div>
                    <div className="col-md-4">
                      <button className="btn" onClick={() => {this.changeFigure('T')}}>Triangle</button>
                    </div>
                    <div className="col-md-4">
                      <button className="btn" onClick={() => {this.changeFigure('S')}}>Square</button>
                    </div>
                    <br /><br />
                  </div>
                </Well>
              </div>
            </div>
          </div>
          <div className="col-md-6">
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
        </div>
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
