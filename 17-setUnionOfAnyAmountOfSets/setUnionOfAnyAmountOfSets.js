function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let union = new Set()

  args.forEach(row =>{
    row.forEach(col => union.add(col))
  });

  return union;

}


// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;