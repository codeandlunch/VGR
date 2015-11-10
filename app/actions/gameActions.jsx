/** @jsx React.DOM */

var Reflux = require('reflux');
var gameApi = require('../api/game.jsx');

var gameActions = Reflux.createActions(
    ['updateRating']
);

gameActions.updateRating.listen(function(id, newRating){
    gameApi.updateRating(id, newRating);
});

module.exports.gameActions = gameActions;