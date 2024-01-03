import React, { Component } from "react";
class home extends Component {
  render() {
    return (
      <div className="homepage">
        <h1>QUIZ APP</h1>
        <button className="playbutton" onClick={this.props.onStartQuiz}>
          Play
        </button>
      </div>
    );
  }
}

export default home;
