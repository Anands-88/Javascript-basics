// Array String First Character
// Given an array of string generate an array with their first characters
// Sample Input - ["Masai", "School"]
// Sample Output - ["M", "S"]
// Screenshot of the output for the array ["apple", "windows", "ubuntu"]

var arrays1 = ["Masai", "School"];

var firstletter = arrays1.map(function(str){
    return str[0];
})
console.log(firstletter)
//--------------------------------------------------------------------------------------------
var arrays2 = ["apple", "windows", "ubuntu"];

var firstletters = arrays2.map(function(str){
    return str[0];
})
console.log(firstletters)