// Take out maximum Ended
// Description

// Given an array of integers and a number k, find the maximum sum of a subarray of size k.


// Input
// Input Format

// First line consists of two integers n and k separated by space

// Second line consists of n integers separated by spaces.

// Constraints

// 1 <= n <= 10^7

// 1 <= k <= 10^6


// Output
// Print the maximum sum of a subarray of size k.


// Sample Input 1 

// 10 3
// -1 -1 -2 1 -2 4 1 9 3 9
// Sample Output 1

// 21


// Sliding window technique,

function runProgram(input) {
	
	input = input.split("\n");
	var [size, num] = input[0].split(" ").map(Number);
	var arr = input[1].split(" ").map(Number);
	
	maximum(size,num,arr);
	
}

function maximum(s,n,arr){
    
    var max = 0;
    var sum = 0;
    
    for (var num = 0; num < n;num++)
    {
        sum = sum + arr[num];
    }
    max = sum;
    
    for (var num2 = 0; num2 < s-n;num2++)
    {
        sum = sum - arr[num2] + arr[num2+n]
    
        if  (max < sum)
        {
            max = sum;
        }
    }
    
    console.log(max);
    
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