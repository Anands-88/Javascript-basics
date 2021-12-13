// Array some criteria

// Given an array of numbers, return the elements that have even index (starting the count at 0) and are even
// Use Higher-order functions
// Sample Input - [2, 4, 5, 3, 6, 8]
// Sample Output - [2, 6]
// Screenshot of the output for the given input



var arrays = [2, 4, 5, 3, 6, 8];

var even_num = function(num){
    return (num % 2 == 0)
}

var even_index = function(num){
    return arrays.indexOf(num) % 2  == 0;
}

var result = arrays.filter(even_num).filter(even_index)

console.log(result)




var even_index = arrays.filter(function(num){

    return arrays.indexOf(num) % 2 == 0;
})

var even_sum = even_index.filter(function(num){

    return num % 2 == 0;
})
console.log(even_sum)