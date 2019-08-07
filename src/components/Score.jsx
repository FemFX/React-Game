import React, { Component } from 'react';

export default class Score extends Component {
  render() {
    return (
      <div className="score-board">
        <div id="user-label" className="badge">
          User
        </div>
        <div id="computer-label" className="badge">
          Comp
        </div>
        <span id="user-score">{ this.props.userScore }</span>:<span id="computer-score">{ this.props.computerScore }</span>
      </div>
    );
  }
}
