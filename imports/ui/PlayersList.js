import React from 'react';

import {Players} from './../api/players';

import Player from './../ui/Player';

import FlipMove from 'react-flip-move';

export default class PlayersList extends React.Component {

    renderPlayers(playerslist) {

      console.log('playerslist in renderPlayer', playerslist);

      if (playerslist.length === 0) {
        return (
          <div className='item' >
            <p className='item__message'>Please add your first player name to get started:</p>
          </div>
        );
      } else {
        return playerslist.map((player) => {
          return <Player key={player._id} player={player}/>;
        });
      }
    }

    render() {
      let playerslisting = this.props.players;

      return (
        <div>
          <FlipMove maintainContainerHeight={true} duration={750} easing="ease-out">
            {this.renderPlayers(playerslisting)}
          </FlipMove>
        </div>
      );
   }
};


PlayersList.propTypes = {
  players: React.PropTypes.array.isRequired
};
