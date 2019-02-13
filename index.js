function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    if (parseInt(endBlock, 10) - parseInt(startBlock, 10) < blockRange) {
      return `within range by ${parseInt(endBlock, 10) - parseInt(startBlock, 10)}`
    }
    else {
      return `${(parseInt(endBlock, 10) - parseInt(startBlock, 10)) - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage) {
  return function(billTotal) {
    return billTotal * percentage
  }
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.id = ++driverId
      this.name = name
    }
  }
}
