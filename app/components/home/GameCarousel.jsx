/** @jsx React.DOM */

var React = require('react/addons');

var Slider = require('react-slick');

var Game = require('./../Game.jsx').Game;

var GameCarousel = React.createClass({
    render: function() {

        var settings = {
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            className: "gameCarousel-main"
        };

        return (
            <Slider {...settings}>
                <div>
                    <Game artworkUrl={this.props.games[0].artworkUrl}
                           title={this.props.games[0].title}
                           rating={this.props.games[0].rating} />
                </div>
                <div>
                    <Game artworkUrl={this.props.games[1].artworkUrl}
                          title={this.props.games[1].title}
                          rating={this.props.games[1].rating} />
                </div>
                <div>
                    <Game artworkUrl={this.props.games[2].artworkUrl}
                          title={this.props.games[2].title}
                          rating={this.props.games[2].rating} />
                </div>
            </Slider>
        );
    }
});

module.exports.GameCarousel = GameCarousel;
