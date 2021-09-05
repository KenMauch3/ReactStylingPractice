//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

var date = new Date();
var timeGreeting;
var hours = date.getHours();
var setColor;
if (hours < 12) {
  timeGreeting = "morning";
  setColor = "red";
} else if (hours < 18) {
  timeGreeting = "afternoon";
  setColor = "green";
} else {
  timeGreeting = "evening";
  setColor = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={{ color: setColor }}>
    Good {timeGreeting}
  </h1>,
  document.getElementById("root")
);
