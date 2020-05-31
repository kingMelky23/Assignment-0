function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
let product =1;

  args.forEach(element => product *= element);
  return product;
}

// Do not edit this line;.
module.exports = productOfAnyAmountOfNumbers;