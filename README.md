# Final Exam - WebDev
To run this application, clone the repository and `cd` into it. To save your twitter credentials, run the following commands


##### Unix
```
export TWITTER_CONSUMER_KEY="yourCredentialsHere"
export TWITTER_CONSUMER_SECRET="yourCredentialsHere"
export TWITTER_ACCESS_TOKEN_KEY="yourCredentialsHere"
export TWITTER_ACCESS_TOKEN_SECRET="yourCredentialsHere"
```

###### Windows
```
set TWITTER_CONSUMER_KEY=yourCredentialsHere
set TWITTER_CONSUMER_SECRET=yourCredentialsHere
set TWITTER_ACCESS_TOKEN_KEY=yourCredentialsHere
set TWITTER_ACCESS_TOKEN_SECRET=yourCredentialsHere
```

Then, to actually run the application, execute these commands

```
meteor npm install
meteor
```

Once the application is running, head over to `localhost:3000` and play around!
To start the twitter stream, type something (or nothing) in the query input and press enter. You will start seeing tweets in or around Colombia with location activated.

## Creative differentiator
- When a tweet is drawn in the map, the color with which the figure is filled is determined by the users profile color.
- The Tweet collection is wiped every time the server is restarted.
- Every time the `overlay` component re-renders, the canvas where the figures are being drawn is wiped completely and every tweet is drawn again.
- Finally, the user can select what kind of figure he wants to display the tweets in the map. Currently available figures are Circle, Square and Triangle.
![Thumbnail](http://i.imgur.com/AQC5MTL.png)
