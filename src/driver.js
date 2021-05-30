'use strict';


///////////////////////
/////// Imports //////
/////////////////////

const events = require('../events.js');

///////////////////
///// Handlers ///
/////////////////

function pickUp(payload) {
  console.log('EVENT ', payload);
  console.log(`Notification From Driver to Vendor: Order number: ${payload.payload.orderID}, Status: PICKED UP successfully`);
  setTimeout(() => {
    events.emit('inTransit', payload);
  }, 1000);
}

function delivered(payload) {
  payload.event = 'inTransit';
  payload.time = new Date().toISOString();
  console.log('EVENT ', payload);
  setTimeout(() => {
    console.log(`Notification From Driver to Vendor: Order number: ${payload.payload.orderID}, Status: DELIVERED successfully`);
    events.emit('delivered', payload);
  }, 3000);
}


module.exports = {
  pickUp,
  delivered, 
};