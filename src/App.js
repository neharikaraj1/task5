import React, { Component } from "react";
import "./App.css";
import "./style.css"

class App extends Component {
  constructor() {
    super();
    this.state = {
      birthDate: "",
      age: null,
    };
  }

  handleBirthDateChange = (event) => {
    this.setState({ birthDate: event.target.value });
  };

  calculateAge = () => {
    const birthDate = this.state.birthDate;
    if (birthDate) {
      const today = new Date();
      const birthDateObj = new Date(birthDate);
      const ageInMilliseconds = today - birthDateObj;
      const ageInYears = Math.floor(ageInMilliseconds / 31536000000);
      this.setState({ age: ageInYears });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>
          <b>Age Calculator</b>
        </h1>
        <label>
          <b>Enter your date of birth</b><br></br>
        </label>
        <input
          type="date"  
          value={this.state.birthDate}
          onChange={this.handleBirthDateChange}
        /><br></br>
        <button className="hike" onClick={this.calculateAge}>Calculate Age</button>
        {this.state.age !== null && (
          <p>
            <b>You are {this.state.age} years old</b>
          </p>
        )}
      </div>
    );
  }
}

export default App;
