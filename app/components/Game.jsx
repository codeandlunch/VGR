/** @jsx React.DOM */

var React = require('react/addons');

var Game = React.createClass({
    
    render: function() {
        var gameStyle = {
            backgroundSize: '300%',
            backgroundPosition: 'center'
            //backgroundImage: 'url(' + this.props.artworkUrl +')'
        };
        return (
            <div style={gameStyle} className="game">
                <h1 className="game-title">
                    {this.props.title}
                    <span className="game-rating">{this.props.rating}</span>
                </h1>
            </div>
        );
    }
});

module.exports.Game = Game;