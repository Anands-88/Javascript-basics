// Array String Pattern
// Given an array of string generate an array whose first or last character is a
// Sample Input - ["assignment", "problem", "media", "upload"]
// Sample Output - ["assignment", "media"]
// Screenshot of the output for the array ["apple", "windows", "ubuntu", "cola", "system"]

var arrays = ["assignment", "problem", "media", "upload"];

var first_last = arrays.filter(function(str){
    var size = str.length-1
    return (str[0] == "a" || str[size] == "a")
})
console.log(first_last);

var arrays_2 = ["apple", "windows", "ubuntu", "cola", "system"]

var first_last_a = arrays_2.filter(function(str){
    var size = str.length-1
    return (str[0] == "a" || str[size] == "a")
})
console.log(first_last_a);
