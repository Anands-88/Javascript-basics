// Array Odd Length String sum
// Given an array of strings print the sum of lengths if the characters in the string are odd
// Sample Input - ["A", "Good", "Problem"]
// Sample Output - 8
// Screenshot of the output for the array ["Apple", "Windows", "Linux", "Kindle", "Quiz"]

// var arrays = ["A", "Good", "Problem"];

// var odd_length = arrays.filter(function(str){
//     return (str.length % 2 == 1)
// })

// var length_sum = odd_length.reduce(function(ac,cv){
//     return ac.length + cv.length
// })

// console.log(length_sum)

// var arrays = ["Apple", "Windows", "Linux", "Kindle", "Quiz"];

// var odd_string = arrays.filter(function(str){
//     return (str.length % 2 == 1)
// })

// var odd_length = odd_string.map(function(str){
//     return str.length
// })

// var length_sum = odd_length.reduce(function(ac,cv){
//     return (ac + cv)
// })

// console.log(length_sum)


var arrays = ["Apple", "Windows", "Linux", "Kindle", "Quiz"];

var odd_string = function(str){
    return (str.length % 2 == 1)
}

var odd_length = function(str){
    return str.length
}

var length_sum = function(ac,cv){
    return (ac + cv)
}

var result = arrays.filter(odd_string).map(odd_length).reduce(length_sum)

console.log(result)