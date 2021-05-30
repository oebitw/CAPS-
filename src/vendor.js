'use strict';

////////////////////////////
/////// Dependencies //////
//////////////////////////

require('dotenv').config();
const faker = require('faker');

///////////////////////
/////// Imports //////
/////////////////////
const events = require('../events.js');
const store = process.env.STORE_NAME;


///////////////////
///// Handlers ///
/////////////////

function createOrder() {
  let order = {
    store: store,
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
  };
  return order;
}


function newOrder() {
  console.log('Notification From Vendor to Driver: New Order to Pickup');
  events.emit('pickup', {
    event: 'pickup',
    time: new Date().toISOString(),
    payload: createOrder(),
  });
}

function gratitude(payload) {
  console.log(`Notification From Vendor to Driver: Thanks for Delivering the package on time`);
}



////////////////////////////////////////////
////// simulate a new customer order //////
//////////////////////////////////////////


setInterval(() => {
  newOrder();
}, 5000);
    

///////////////////////////////
///////// Export Modules /////
/////////////////////////////

module.exports ={
  newOrder,
  gratitude,
};