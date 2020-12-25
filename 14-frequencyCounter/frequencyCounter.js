function frequencyCounter(word) {
  let count  = {};
  
  for (let i=0; i<word.length; i++)
  {
    count[word[i]] = (count[word[i]] || 0) +1
  }
 
  return count;
}

// Do not edit this line;
module.exports = frequencyCounter;
