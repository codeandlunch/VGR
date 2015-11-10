/** @jsx React.DOM */

var React = require('react/addons');
var inflator = require('./stores/Inflator');

var App = React.createFactory(require('./components/home/App.jsx').App);

var appMount = document.getElementById('app-mount');

inflator.inflate();
React.render(new App({}), appMount);