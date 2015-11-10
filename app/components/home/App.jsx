/** @jsx React.DOM */

var React = require('react/addons'),
    Reflux = require('reflux');

//components
var GameCarousel = require('./GameCarousel.jsx').GameCarousel,
    GameTable = require('./GameTable/Table.jsx').GameTable,
    Footer = require('../Footer.jsx').Footer;

//data
var GamesStore = require('../../stores/GameStore.jsx').GameStore;
var gameActions = require('../../actions/gameActions.jsx').gameActions;


var App = React.createClass({
    mixins: [
        Reflux.connect(GamesStore, 'data') // this.state.data
    ],

    render: function() {
        return (
            <div>
                <GameCarousel games={this.state.data} />
                <GameTable data={this.state.data} />
                <Footer />
            </div>
        )
    }
});

module.exports.App = App;
