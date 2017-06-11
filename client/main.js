import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players, calculatePlayerPositions} from './../imports/api/players';

import App from './../imports/ui/App';


Tracker.autorun(() => {
  console.log('Players List', Players.find().fetch());

});

var playersdb = [];

const players = [{
  _id: '1',
  name: 'Lauren',
  score: 99
}, {
  _id: '2',
  name: 'Cory',
  score: -1
}, {
  _id: '3',
  name: 'Andrew',
  score: -12

}];

Meteor.startup(() => {

  Tracker.autorun(() => {

    let titlevar = 'Score Keep App';
    let subTitleVar = 'Created by:  Ralph Kuerbis';
    let scorevar = 0;
    let playersdb = Players.find({}, {sort: {score: -1}}).fetch();
    let positionedPlayers = calculatePlayerPositions(playersdb);
    console.log('Players List db', positionedPlayers);

    ReactDOM.render(<App title={titlevar} subtitle={subTitleVar} score={scorevar} players={positionedPlayers}/>, document.getElementById('app'));
  });
});
