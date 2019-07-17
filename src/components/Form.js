import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <div>
        <h1>Form</h1>

        <div class="section-title">
          <h3>Where are you going ?</h3>
          <input type="radio" name="destination-type" value="Work" />
          Work
          <input type="radio" name="destination-type" value="Gym" />
          Gym
          <input type="radio" name="destination-type" value="Out" />
          Partying
        </div>
        <div class="section-title">
          <h3>How long?</h3>
          <input type="range" name="duration" min="0" max="2" />
          {/* 0 - trip less than 30 mins
                    1 - 30 mins to 1hour
                    2 - 1 hour + */}
        </div>
      </div>
    );
  }
}
