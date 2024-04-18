// function to take input and calculate area of a rectangle 
function Area (w= 1, l = 2){
    const d = l * w
    console.log("Area of the rectangle is:", d)
}

Area(120, 5)


/**
Write a JavaScript function named scoreCategory that takes a student's score as input and returns the corresponding category based on the following criteria:

Score 90 or above: return "Excellent"

Score 80-89: return "Very Good"

Score 70-79: return "Pass"

Score below 70: return "Fail". */

// Function that take student's score as input and grade

function scoreCategory(score) 
{ if (score >= 90) {
 return "Excellent"
  } 
  
else if (score >= 80 && score <= 89) {
 return "Very Good"; } 
 
else if (score >= 70 && score <= 79) { 
return "Pass"; } 

else { return "Fail"; } } 


console.log("The score grade is: ", scoreCategory(92))
console.log("The grade score is :", scoreCategory(83))
console.log(scoreCategory(75))
console.log(scoreCategory(64))
console.log(scoreCategory(50))
