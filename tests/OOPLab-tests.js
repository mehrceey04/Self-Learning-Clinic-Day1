'use strict'
var chai = require('chai')
var expect = chai.expect
var MobilePhone = require('../app/OOPLab.js')

describe("MobilePhone class, creates a mobile phone, make a call", function() {

    it("The mobile phone should be a type of `object`, and an instance of the `MobilePhone` class", function() {
      var nokia = new MobilePhone('Nokia');
      expect(typeof nokia).to.equal(typeof {});
      expect(nokia instanceof MobilePhone).to.equal(true);
    });

    it("The mobile phone name and model should be a property of the phone", function() {
      var innjoo = new MobilePhone('Innjoo', 'Innjoo T1');
      expect(innjoo.name).to.equal('Innjoo');
      expect(innjoo.model).to.equal('Innjoo T1');
    });

    it("The mobile phone should be called 'General' if no name is passed as a parameter", function() {
      var myPhone = new MobilePhone();
      expect(myPhone.name).to.equal('MobilePhone');
      expect(myPhone.model).to.equal('Unknown model');
    });

    it("should return undefined when trying to access a private variable", function(){
      var nokia = new MobilePhone("Nokia")
      expect(nokia.hidden).to.equal(undefined)
    });

    it("should be able to make a call", function(){
      var iPhone = new MobilePhone("iPhone")
      expect(iPhone.call()).to.equal("Making a call")
    })

    it("should be able to send a message", function(){
      var iPhone = new MobilePhone("iPhone")
      expect(iPhone.message()).to.equal("Sending a message")
    })

    it("should be able to add a contact", function(){
      var innjoo = new MobilePhone("Innjoo")
      var contact = {name: "Mehrceey", number: "081313608"}
      expect(innjoo.addContact(contact)).to.equal(contact)
    })

  });