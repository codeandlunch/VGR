/** @jsx React.DOM */

var React = require('react/addons');

var gameActions = require('../actions/gameActions.jsx').gameActions;

var Rater = React.createClass({

    ratingChange: function(event) {
        gameActions.updateRating(this.props.id, event.target.value);
    },

    render: function(){
        return (
            <input size="2" className="gameInfo" type="text" value={this.props.rating} onChange={this.ratingChange} />
        )
    }
});

module.exports.Rater = Rater;