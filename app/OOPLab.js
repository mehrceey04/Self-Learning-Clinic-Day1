module.exports = function MobilePhone(name, model){
  if(name === undefined){
    this.name = "MobilePhone";
  }
  else{
    this.name = name;
  }

  if(model === undefined){
    this.model = "Unknown model";
  }
  else{
    this.model = model;
  }
  var hidden = "some specification hidden from user";

  MobilePhone.prototype.message = function(){
    return "Sending a message";
  }

  MobilePhone.prototype.call = function(){
    return "Making a call";
  }
  
  MobilePhone.prototype.addContact = function(contact){
    var newContact = contact;
    return newContact;
  }
}