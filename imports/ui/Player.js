import React from 'react';

import {Players} from './../api/players';


export default class Player extends React.Component {

  render() {
    let player = this.props.player;
//    let playersdb = Players.find({_id: {this.props.key}}).fetch();
    let itemClassName = `item item__position__${this.props.player.rank}`;

    return (
      <div key={this.props.player._id} className={itemClassName}>
        <div className='player'>
          <div>
            <h3 className='player__name'>
              {this.props.player.name}
            </h3>

            <p className='player__stats'>

              Number: {this.props.player.rank}  Ranked: {this.props.player.position}  With: {this.props.player.score} point(s).
            </p>
          </div>

          <div className='player__actions'>
            <button className='button button--round' onClick={() => {
              Players.update({_id: player._id}, {
                $inc: {score: -1}
              });
            }}>-1</button>

            {/*     <button onClick={() => Players.update(player._id, {$inc: {score: -1}})}>-1</button>
                    see different construct for {_id: player._id}, also expression version of function definition
                    JavaScript constructs!
            */}

            <button className='button button--round' onClick={() => {
              Players.update({_id: player._id}, {
                $inc: {score: 1}
              });
            }}>+1</button>

            {/*     <button onClick={() => Players.update(player._id, {$inc: {score: +1}})}>+1</button>
                    see different construct for {_id: player._id}, also expression version of function definition
            */}

            <button className='button button--round' onClick={() => {
              Players.remove({_id: player._id});
   //                alert('deleted')
            }}>X</button>

            {/*     <button onClick={() => Players.remove({_id: player._id})}>XDELETEX</button>
            */}


          </div>
        </div>
      </div>
    );
  }
};


Players.propTypes = {
  player: React.PropTypes.object.isRequired,
  key: React.PropTypes.string.isRequired
};
