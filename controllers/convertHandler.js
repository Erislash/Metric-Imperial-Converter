function ConvertHandler() {
  this.getFirstLetter = function(str) {
    const length = str.length;
    for (let i = 0; i < length; ++i) {
      if ((str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90) 
      || str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122) {
        return i;
      }
    }
    return -1;
  };

  this.processNum = (n) => {
    for (let i = 0; i < n.length; ++i){
      if(n[i] === '/'){
        if(i + 1 >= n.length){
          return null;
        }
        return (parseFloat(n.substring(0, i)) / parseFloat(n.substring(i + 1)));
      }
    }
    return n;
  }
  
  this.getNum = function(input) {
    let result = '';
    const firstLetter = this.getFirstLetter(input);
    if (firstLetter === -1) return null;
    
    result = input.substring(0, firstLetter);

    

    return this.processNum(result);
  };

  
  this.getUnit = function(input) {
    let result = '';
    const firstLetter = this.getFirstLetter(input);
    if (firstLetter === -1) return null;

    result = input.substring(firstLetter);

    return result;
  };
  
  
  this.getReturnUnit = function(initUnit) {
    if (!initUnit) return null;

    const table = {
      'gal': 'L',
      'lbs': 'kg',
      'mi': 'km',
      'l': 'gal',
      'kg': 'lbs',
      'km': 'mi'
    };

    if (!Object.keys(table).includes(initUnit.toLowerCase())) return null;

    return (table[initUnit.toLowerCase()]);
  };

  this.spellOutUnit = function(unit) {
    switch (unit.toLowerCase()){
      case 'gal':
        return 'gallon(s)'
      case 'l':
        return 'liter(s)'
      case 'lbs':
        return 'pound(s)'
      case 'kg':
        return 'kilogram(s)'
      case 'mi':
        return 'mile(s)'
      case 'km':
        return 'kilometer(s)'
      default:
        return null;
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    switch (initUnit.toLowerCase()){
      case 'gal':
        return (initNum * galToL).toFixed(5);
      case 'l':
        return (initNum / galToL).toFixed(5);
      case 'lbs':
        return (initNum * lbsToKg).toFixed(5);
      case 'kg':
        return (initNum / lbsToKg).toFixed(5);
      case 'mi':
        return (initNum * miToKm).toFixed(5);
      case 'km':
        return (initNum / miToKm).toFixed(5);
      default:
        return null;
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
  
}

module.exports = ConvertHandler;
