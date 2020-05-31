class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    let start = nums.length - nums.length;    //set to first index
    let end = nums.length-1;   //set to last index

    
      while(start <= end)
      {
        //to take the middle index of the array
        let mid = Math.floor((start+end)/2);

        if(nums[mid]==target)    //check if target is equal to mid index value
          return true;

        else if(nums[mid] < target)
          start = mid + 1;   //move right by one index

        else  if(nums[mid] > target)
          end = mid-1;       //move left by one index
      }

      return false;

  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;