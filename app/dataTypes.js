module.exports = {
  dataTypes : function(value) {
    if(typeof(value) === 'string') {
      return value.length;
    }
    if((value === null) || typeof(value) === 'undefined') {
      return 'no value';
    }
    if(typeof(value) === 'boolean') {
      return value;
    }
    if(typeof(value) === 'number') {
      if(value < 100) return 'less than 100';
      if(value === 100) return 'equal to 100';
      if(value > 100) return 'more than 100';
    }
    if(typeof(value) === 'object' && value.length >= 3) {
      return value[2];
    } else { 
      return 'undefined';
    }
    if(typeof(value) === 'function') {
    return value(true);  
    } 
  }
}