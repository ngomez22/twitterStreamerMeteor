import { Meteor } from "meteor/meteor";

import { Tweets } from "../imports/api/Tweets.js";

Meteor.startup(() => {
  // code to run on server at startup
  Tweets.remove({});
});
