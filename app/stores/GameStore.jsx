/** @jsx React.DOM */

var Reflux = require('reflux');
var request = require('superagent');
var inflator = require('./Inflator');
var gameActions = require('../actions/gameActions.jsx').gameActions;

var GameStore = Reflux.createStore({

    data: {},

    init: function() {
        this.clean();
        inflator.on('clean', this.clean.bind(this));
        inflator.on('load', this.load.bind(this));
        this.listenTo(gameActions.updateRating, this.updateRating)
    },

    clean: function() {
        this.data = {};
    },

    load: function(data) {
        this.data = data.games;
    },

    // boilerplate
    done: function () {
        this.trigger(this.data);
    },

    getInitialState: function () {
        return this.data;
    },

    findGame: function(id) {
        for (var i = 0, g = this.data.length; i < g; ++i) {
            var game = this.data[i];
            if (game._id === id) {
                return {
                    data: game,
                    idx: i
                };
            }
        }
    },

    updateRating: function (id, newRating) {
        if(newRating > -1 && newRating < 11) {
            this.data[this.findGame(id).idx].rating = newRating;
            this.done();
        }
    }
});

module.exports.GameStore = GameStore;