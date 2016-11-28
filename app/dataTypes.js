module.exports = {
  dataTypes : function(data) {
    if((data === null) || typeof(data) === 'undefined') {
      return 'no value';
    }
    if(typeof(data) === 'string') {
      return data.length;
    }
  
    if(typeof(data) === 'boolean') {
      return data;
    }
    if(typeof(data) === 'number') {
      if(data < 100) return 'less than 100';
      if(data === 100) return 'equal to 100';
      if(data > 100) return 'more than 100';
    }
    if(typeof(data) === 'object' && data.length >= 3) {
      return data[2];
    } else { 
      return 'undefined';
    }
    if(typeof(data) === 'function') {
    return data(true);  
    } 
  }
}