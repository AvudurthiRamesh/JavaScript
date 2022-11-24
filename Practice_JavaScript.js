//Declaring variables
var fName = "Ramesh "
var lName = "Avudurthi"
//concating 2 strings with + operator
fullName = "Ramesh " + "Avudurthi1"
console.log(fullName)
//concating 2 strings with += operator
fName += "Avudurthi"
console.log(fName)
//find length of string
lNameLength = lName.length;
console.log(lNameLength)
//finding the characters of a String
charPlace = fName[3]
console.log(charPlace)
//finding last character of string
word = "abcdef"
lastChar = word[word.length-1]
console.log(lastChar)

//Using Word Blanks 
//wordBlank() is a function, we can define once and use multiple times.
function wordBlank(fNumber, sNumber, tNumber)
{
var result = ""
result = "A " + sNumber+" " + fNumber + " " + tNumber + " B"
return result
}
console.log(wordBlank("222","111","333"));
/* explanation
wordBlank(fNumber, sNumber, tNumber)
wordBlank("222","111","333")
according to above 2 lines fNumber is 222, sNumber is 111 and tNumber is 333
result = "A " + sNumber+" " + fNumber + " " + tNumber + " B" - 
irrespective of order in console, it will prints the order how we defined in wordBlank function and return results
*/
//ARRAYS
var arrayDef = ["Ram", 124] // in Javascripts it will allows multiple datatypes into single array
//NESTED ARRAYS
var nestedArray = [["Ram", 124],["Raj",111]];
//ACCESSING ARRAY ELEMENTS BY USING INDEXES
var myName = arrayDef[0]
var newName =nestedArray[1]
console.log(myName)
console.log(newName)
