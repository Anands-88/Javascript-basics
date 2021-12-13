// Description

// You are given an arrayA, containingNintegers. Find the digit sum array for the given array.

// The digit sum array for a given arrayA, contains the sum of the digits present in a given number, stored at the corresponding index inA.

// Refer the sample I/O for better understanding.


// Input
// The first line of the input containsT, the number of test cases.

// The first line of each test case, contains N, the number of elements in the array.

// Next line containsNspace separated integers, denoting the elements of the array

// Constraints

// 1 <=T<= 10

// 1 <=N<= 10000

// 1 <=A[i]<= 10000


// Output
// For each test case, print the elements in the digit sum array, on a single line, on a new line.


// Sample Input 1 

// 2
// 5
// 12 14 16 17 29
// 6
// 1 2 3 4 5 51
// Sample Output 1

// 3 5 7 8 11 
// 1 2 3 4 5 6 
// Hint

// In the first sample test case, the sum of digits for various values, is as given below

// 12 -> 1 + 2 = 3

// 14 -> 1 + 4 = 5

// 16 -> 1 + 6 = 7

// 17 -> 1 + 7 = 8

// 29 -> 2 + 9 = 11

// Therefore, the output is '3 5 7 8 11'.

// Similarly, the output in the second test case is1 2 3 4 5 6

function runProgram(input) {
    
    input = input.split("\n");
    var testcase = +input[0];
    var line = 1;
    for (var num = 0; num < testcase; num++)
    {
        var size = +input[line];
        line++;
        var arr = input[line].split(" ");
        line++;
        
        digitSum(size,arr);
    }
    
 }
 
 function digitSum(n,arr){
     
    var collect = "";
    bag = 0;
    for (var num = 0; num < n; num++)
    {
        var box = arr[num];
        bag = box.split("");
        var sum = 0;
        for (var num2 = 0; num2 < bag.length; num2++)
        {
            sum = sum + (+bag[num2]);
        }
        collect = collect + sum + " ";
    }
    console.log(collect);
 }
 
 
 
 
 
 if (process.env.USERNAME === "") {
     runProgram(``);
 } else {
     process.stdin.resume();
     process.stdin.setEncoding("ascii");
     let read = "";
     process.stdin.on("data", function (input) {
         read += input;
     });
     process.stdin.on("end", function () {
         read = read.replace(/\n$/, "");
         read = read.replace(/\n$/, "");
         runProgram(read);
     });
     process.on("SIGINT", function () {
         read = read.replace(/\n$/, "");
         runProgram(read);
         process.exit(0);
     });
 }