var arrays = [1,2,3,4,5,6];

var cubes = arrays.map(function(num){
    return num ** 3
})

var cubesdiv = cubes.filter(function(num){
    return (num % 3 == 0)
})

var cubesum = cubesdiv.reduce(function(ac,cv){
    return ac+cv
})

console.log(cubesum)









// var cubes = function(num){
//     return num**3
// }
// var cubesby3 = function(num){
//     return (num % 3 == 0)
// }

// var cubesum = function(ac,cv){
//     return ac+cv
// }

// var result = arrays.map(cubes).filter(cubesby3).reduce(cubesum)

// console.log(result)












// var array = [2, 4, 6, 8, 10];

// array.forEach(square);

// function square(num){
//     console.log(num * num)
// }

// var arrays = [1, 2, 3];

// var oddnum = arrays.filter(function(num){
//     return (num%2==1)
// })

// console.log(oddnum)

// var sum = 1;
// var arrays = [2,3,4];

// arrays.forEach(function(num){
//     sum *=num;
// })

// console.log(sum);

// var arrays = [2,3,4];

// var product = arrays.reduce(function(ac,cv){
//     return ac*cv;
// })

// console.log(product);

// var oddnum = arrays.filter(function(num){
//     return (num % 2 == 1)
// })

// var oddsum = oddnum.reduce(function(ac,cv){
//     return ac+cv
// })

// console.log(oddsum)


// var oddnum = function(num){
//     return (num % 2 == 1)
// }

// var oddsum = function(ac,cv){
//     return ac+cv
// }

// var result = arrays.filter(oddnum).reduce(oddsum)

// console.log(result)