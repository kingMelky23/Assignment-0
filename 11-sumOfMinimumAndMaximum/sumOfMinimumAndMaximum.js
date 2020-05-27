function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  const sum = Math.max.apply(Math,nums) + Math.min.apply(Math,nums);
  return sum;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;