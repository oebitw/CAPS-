'use strict';

////////////////////////
////// Dependencies ///
//////////////////////

const faker = require('faker');

///////////////////
////// Imports ///
/////////////////


const vendor = require('../src/vendor.js');
const driver = require('../src/driver.js');

/////////////////////
////// Unit Test ///
///////////////////

describe('Test The App', () => {

  let consoleSpy;

  
  let order= {
    store: '1-206-flowers',
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
  };
  
  let payload = {
    event: 'pickup',
    time: new Date().toISOString(),
    payload: order,
  };
  
  jest.useFakeTimers();
  
  beforeAll(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterAll(() => {
    consoleSpy.mockRestore();
  });
  
  it('Test initiating new order', () => {
    vendor.newOrder();
    expect(consoleSpy).toHaveBeenCalled();
  });
  it('Test Driver pickup order after 1 second', async () => {
    driver.pickUp(payload);
    setTimeout(() => {
      expect(consoleSpy).toHaveBeenCalled();
      expect(consoleSpy).toHaveBeenLastCalledWith(expect.any(Function), 1000);        
    }, 1000);
  });

  it('Test Driver Deliver the order after 3 seconds', async () => {
    driver.delivered(payload);
    setTimeout(() => {
      expect(consoleSpy).toHaveBeenCalled();
      expect(consoleSpy).toHaveBeenLastCalledWith(expect.any(Function), 3000);        
    }, 3000);
  });

  it('Test Driver Deliver the order', async () => {
    driver.delivered(payload);
    setTimeout(() => {
      expect(consoleSpy).toHaveBeenCalled();
      expect(consoleSpy).toHaveBeenLastCalledWith(expect.any(Function), 3000);        
    }, 3000);
  });

  it('Test Thanking the driver', async () => {
    vendor.gratitude(payload);
    setTimeout(() => {
      expect(consoleSpy).toHaveBeenCalled();
      expect(consoleSpy).toHaveBeenLastCalledWith(expect.any(Function), 3000);        
    }, 3000);
  });

});


