'use strict';

//////////////////////
////// Imports //////
////////////////////

const event = require('../events');
const vendor= require('./vendor.js');
const driver = require('./driver.js');

/////////////////////////
////// Set Events //////
///////////////////////

event.on('pickup', driver.pickUp );
event.on('inTransit', driver.delivered);
event.on('delivered', vendor.gratitude);

