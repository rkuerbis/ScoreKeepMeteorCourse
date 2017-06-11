import React from 'react';

import {Players} from './../api/players';

import TitleBar from './../ui/TitleBar';

import AddPlayer from './../ui/AddPlayer';

import Player from './../ui/Player';

import PlayersList from './../ui/PlayersList';


export default class App extends React.Component {

  renderApp() {
// Add javascript functions here
  }
  render() {
    let titlevar = this.props.title;
    let subTitleVar = this.props.subtitle;
    let scorevar = this.props.score;
    let playersdb = this.props.players;


    return (
      <div>
        {this.renderApp()}
        <TitleBar title={titlevar} subtitle={subTitleVar}/>
        <div className='wrapper'>
          <PlayersList players={playersdb}/>
          <AddPlayer score={scorevar}>
            <p>**********************************************************</p>
          </AddPlayer>
        </div>
      </div>
    );
  }
};

App.propTypes = {
  players: React.PropTypes.array.isRequired,
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired
};
