import React, { Component } from 'react';
import Score from './Score';

export default class Game extends Component {
  constructor() {
    super();
    this.state = {
      computerChoice: undefined,
      userChoice: undefined,
      choices: ['r', 'p', 's'],
      userScore : 0,
      computerScore : 0
    };
    this.getComputedChoice = this.getComputedChoice.bind(this);
    this.getUserChoice = this.getUserChoice.bind(this);
  }
  getComputedChoice() {
    const random = Math.floor(Math.random() * 3);
    this.setState({
      computerChoice: this.state.choices[random]
    });
  }
  getUserChoice(val) {
    this.setState({
      userChoice: val
    });
    switch (this.state.userChoice + this.state.computerChoice) {
      case 'rs':
      case 'pr':
      case 'sp':
        this.setState({
            userScore : this.state.userScore + 1
        })
        break;
      case 'rp':
      case 'ps':
      case 'sr':
        this.setState({
            computerScore : this.state.computerScore + 1
        })
        break;

      case 'rr':
      case 'pp':
      case 'ss':
        break;
        
      default:
        break;
    }
    this.getComputedChoice();
  }
  componentWillMount() {
    this.getComputedChoice();
  }
  render() {
    return (
      <div>
        <Score 
            computerScore={this.state.computerScore}
            userScore={this.state.userScore}
        />
        <div className="result">
          <p>Камень ножницы бумага.Ты выиграешь!</p>
        </div>

        <div className="choices">
          <div className="choice">
            <img
              src="https://cdn0.iconfinder.com/data/icons/rock-paper-scissors-emoji/792/rock-paper-scissors-emoji-cartoon-027-256.png"
              alt="rock"
              onClick={() => this.getUserChoice('r')}
            />
          </div>
          <div className="choice">
            <img
              src="https://cdn0.iconfinder.com/data/icons/rock-paper-scissors-emoji/792/rock-paper-scissors-emoji-cartoon-019-256.png"
              alt="paper"
              onClick={() => this.getUserChoice('p')}
            />
          </div>
          <div className="choice">
            <img
              src="https://cdn0.iconfinder.com/data/icons/rock-paper-scissors-emoji/792/rock-paper-scissors-emoji-cartoon-009-256.png"
              alt="scissors"
              onClick={() => this.getUserChoice('s')}
            />
          </div>
        </div>
        <p id="action-message">Сделай свой выбор.</p>
      </div>
    );
  }
}
