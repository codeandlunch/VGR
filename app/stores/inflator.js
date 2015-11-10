var events = require('events'),
    util = require('util');

function Inflator () {
    events.EventEmitter.call(this);
}

//do not move this
util.inherits(Inflator, events.EventEmitter);

Inflator.prototype.loadPageData = function() {
    if(typeof window !== 'undefined'){
        try {
            return JSON.parse(document.getElementById('page-data').innerHTML);
        } catch(e) {
            console.log(e);
        }
    }
};

Inflator.prototype.inflate = function(data) {
    data = data || this.loadPageData();
    this.emit('clean');
    this.emit('load', data);
};


module.exports = new Inflator();