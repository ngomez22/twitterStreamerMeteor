import React, {Component} from "react";
import { Meteor } from "meteor/meteor";



export default class Tweet extends Component {
  render() {
    return (
      <div className="row tweet">
        <div className="col-md-2">
          <img src={this.props.tweet.user.profile_image_url} alt={this.props.tweet.user.screen_name + " profile pic"}/>
        </div>
        <div className="col-md-10">
          <h5><bold>{this.props.tweet.user.screen_name}</bold> (@{this.props.tweet.user.screen_name})</h5>
          <small>{this.props.tweet.created_at}</small>
          <p>{this.props.tweet.text}</p>
        </div>
        <hr />
      </div>
    );
  }
}
