import React, { Component } from "react";
import axios from 'axios';
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age : "",
      gender : "",
      destination : "",
      duration : ""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit() {
    axios.get("https://api-football-v1.p.rapidapi.com/v2/fixtures/live", this.state).then((res) => console.log(res))
    .catch((err) => console.log("fsadsfdafsda"))
  }

  state = "";
  render() {
    return (
      <div>
        <h1> Form </h1>{" "}
        <div class="section-title">
          <h3> I am </h3> <input onChange={(e) => this.setState({gender : e.target.value})} type="radio" name="gender" value="male" /> Male{" "}
          <input  onChange={(e) => this.setState({gender : e.target.value})} type="radio" name="gender" value="female" /> Female{" "}
          <input onChange={(e) => this.setState({age : e.target.value})} type="radio" name="age" value="0-18" /> 0 - 18{" "}
          <input onChange={(e) => this.setState({age : e.target.value})} type="radio" name="age" value="18-30" /> 18 - 30{" "}
          <input onChange={(e) => this.setState({age : e.target.value})} type="radio" name="age" value="30+" /> 30 +
          <h3> Where are you going ? </h3>{" "}
          <input onChange={(e) => this.setState({destination : e.target.value})} type="radio" name="destination-type" value="Work" />
          Work <input onChange={(e) => this.setState({destination : e.target.value})}type="radio" name="destination-type" value="Gym" />
          Gym <input onChange={(e) => this.setState({destination : e.target.value})} type="radio" name="destination-type" value="Out" />
          Partying{" "}
        </div>{" "}
        <div class="section-title">
          <h3> How long ? </h3>{" "}
          <input onChange={(e) => this.setState({duration : e.target.value})} type="range" name="duration" min="0" max="2" />
          <button onClick={this.onSubmit}>Send</button>
          {" "}
          {/* 0 - trip less than 30 mins
                            1 - 30 mins to 1hour
                            2 - 1 hour + */}{" "}
        </div>{" "}
      </div>
    );
  }
}
