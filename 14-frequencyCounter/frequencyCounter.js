function frequencyCounter(word) {
  // Insert code here;
  //create empty object
  let freq={}

  //loop through all the char in the string
  for(let i = 0; i <word.length; i++){
    //check if letter is in the object
    if(freq[word[i]]){
      //add 1 to counter
      freq[word[i]]+=1
    }
    else{
      //else create a new counter for the new element
      freq[word[i]] =1
    }
  }
  return freq
}


// Do not edit this line;
module.exports = frequencyCounter;