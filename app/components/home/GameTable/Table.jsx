/** @jsx React.DOM */

var React = require('react/addons');
var Griddle = require('griddle-react');
var Rater = require ('../../Rater.jsx').Rater;
var Row = require('../GameTable/Row.jsx').Row;

var GameTable = React.createClass({
    render: function() {
        return (
            <div id="game-table-area">
                <Griddle results={this.props.data}
                         showFilter={true}
                         useCustomRowComponent={true}
                         customRowComponent={Row} />
            </div>
        )
    }
});

module.exports.GameTable = GameTable;