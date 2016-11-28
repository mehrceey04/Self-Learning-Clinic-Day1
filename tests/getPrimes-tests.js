 'use strict';
  var chai = require('chai');
  var expect = chai.expect;

  var myApp = require('../app/getPrimes.js');

describe('Return prime numbers generated from 0 to n in an array`', function () {
  it('should return [2] for n = 2', function () {
    expect(myApp.getPrimes(2)).to.eql([2]);
  });

  it('should return [2, 3, 5, 7] for n = 10', function () {
    expect(myApp.getPrimes(10)).to.eql([2, 3, 5, 7]);
  });

  it('should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53 ] for n = 55', function () {
    expect(myApp.getPrimes(55)).to.eql([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53 ]);
    });
  it('should return n for n < 2', function () {
    expect(myApp.getPrimes(1)).to.eql(1);
  });
  it('should return n for n < 2', function () {
    expect(myApp.getPrimes(0)).to.eql(0);
  });

});

