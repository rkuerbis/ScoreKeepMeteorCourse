import React from 'react';

import {Players} from './../api/players';


export default class AddPlayer extends React.Component {
// Special functions handleSubmit() and render() within component construct of react program
  handleSubmit(e) {
    // console.log("Input Value = ", e.target.playerName, 'Player Input = ', e);
    // console.log("Input Value = ", e.target.playerName.value, 'Player Input = ', e);

    let playerName = e.target.playerName.value;
    e.preventDefault();
      // Keeps page from updating or openning new page

    debugger;

    if(playerName) {
      e.target.playerName.value = '';
      Players.insert({
        name: playerName,
        score: this.props.score
      });
    };
  };


  render() {
    return (
      <div className="item">
        {this.props.children}

        <form className='form' onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" className='form__input' name="playerName" placeholder="Player name"/>
          <button className='button'>Add Player</button>
        </form>


      </div>
    );
  }
};


AddPlayer.propTypes = {
  score: React.PropTypes.number.isRequired
};
