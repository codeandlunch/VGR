var React = require('react/addons');
var Rater = require ('../../Rater.jsx').Rater;

var Row = React.createClass ({

  render: function() {
    return (<div className={"rowStyle"}>
        <Rater rating={this.props.data.rating} id={this.props.data._id}/>
        <div className={"gameTitle"}>{this.props.data.title}</div>
        <div className={"gameInfo"}>{this.props.data.releaseDate}</div>
      </div>
      )
  }
});

module.exports.Row = Row;