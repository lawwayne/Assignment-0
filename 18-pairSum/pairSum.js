function pairSum(nums, target) {
  
  if (nums.lenght<=1)
  {
    throw "error";
  }
  
    for(let i = 0; i < nums.length; i++)
    {
      for(let j = nums.length; j >i; j--)
      {
        return true;
      }


    }
  return false;
  
}

// Do not edit this line;
module.exports = pairSum;
