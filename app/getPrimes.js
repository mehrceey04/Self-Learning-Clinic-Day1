module.exports = {
  getPrimes : function(n) {
    var i, j, primeArray = [], isPrime;
    if(n < 2) {
      isPrime = false;
      return n;
    }
    for(j = 2; j <= n; j++) {
      isPrime = true;
      for(i = 2; i < j; i++) {
        if(j % i === 0) {
          isPrime = false;
          break;
        }
      }
      if(isPrime){
        primeArray.push(j);
      }
    }
    return primeArray;
  }
}