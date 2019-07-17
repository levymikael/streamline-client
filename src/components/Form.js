import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generalScore: ""
    };
    this.profile = this.profile.bind(this);
  }
  profile() {
    var generalScore = 0;

    var age = document.getElementsByName("gender").value;

    var gender = document.getElementsByName("age").value;

    var destination = document.getElementsByName("destination-type").value;

    var duration = document.getElementsByName("duration").value;

    var generalScore = {
      age: age,
      gender: gender,
      destination: destination,
      duration: duration
    };

    return generalScore;
  }

  state = "";
  render() {
    return (
      <div>
        <h1> Form </h1>{" "}
        <div class="section-title">
          <h3> I am </h3> <input type="radio" name="gender" value="male" /> Male{" "}
          <input type="radio" name="gender" value="female" /> Female{" "}
          <input type="radio" name="age" value="0-18" /> 0 - 18{" "}
          <input type="radio" name="age" value="18-30" /> 18 - 30{" "}
          <input type="radio" name="age" value="30+" /> 30 +
          <h3> Where are you going ? </h3>{" "}
          <input type="radio" name="destination-type" value="Work" />
          Work <input type="radio" name="destination-type" value="Gym" />
          Gym <input type="radio" name="destination-type" value="Out" />
          Partying{" "}
        </div>{" "}
        <div class="section-title">
          <h3> How long ? </h3>{" "}
          <input type="range" name="duration" min="0" max="2" />{" "}
          {/* 0 - trip less than 30 mins
                            1 - 30 mins to 1hour
                            2 - 1 hour + */}{" "}
        </div>{" "}
      </div>
    );
  }
}
