/** @jsx React.DOM */

module.exports = {
    updateRating: function(id, newRating){
        var $ = window.$ || window.jQuery;
        console.log("stuff worked");
        $.ajax({
            type: 'POST',
            url: "http://localhost:8008/updateRating",
            data: { Id: id, Rating: newRating},
            contentType: 'application/json'
        });
    }
};