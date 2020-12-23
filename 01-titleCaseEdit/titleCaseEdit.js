function titleCaseEdit(title) {
  
  let finalTitle = title.split(" ") //this will allow the array to happen
  
  .map((word) => {
    return (word.charAt(0).toUppercase() + wordslice(1))
  })
  
  .join("")
  
  return finalTitle;
  
}

// Do not edit this line;
module.exports = titleCaseEdit;
