function isPalindrome(word) {
  
  var pdrome = false;
  for(var i =0; i < word.length; i++;)
  {
    if(word[i] == word[(i+word.length) - 1])
    {
      pdrome = true;
    }
  }
  return pdrome;
}

// Do not edit this line;
module.exports = isPalindrome;
