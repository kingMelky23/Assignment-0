function pairSum(nums, target) {
  // Insert code here;

  let len = nums.length

  if(len <= 1){
     throw Error;
  }

  for(let i = 0; i < len; i++){
    for(let j = i+1; j <len; j++){
      if(nums[i]+ nums[j] === target){
        return true;
      }
    }
  }
  return false
}

// Do not edit this line;
module.exports = pairSum;