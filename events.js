'use strict';

// singleton for the events class

const Event = require('events');
const events = new Event();
module.exports = events;