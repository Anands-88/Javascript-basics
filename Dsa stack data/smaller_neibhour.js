// Description

// Given an array, find the nearest smaller element G[i] for every element A[i] in the array such that the element has an index smaller than i.

// Mathematically,

// G[i] for an element A[i] is an element A[j] such that

// j is maximum possible AND

// j < i AND

// A[j] < A[i]

// Note: Elements for which no smaller element exist, consider next smaller element as -1.


// Input
// Input Format:

// First line contains an integer N denoting the number of elements in the array (not necessarily distinct).

// Second line contains N space separated integers denoting the elements of the array.

// Constraints:

// N <= 100000


// Output
// Print N space separated integers denoting the array G.


// Sample Input 1 

// 8
// 39 27 11 4 24 32 32 1
// Sample Output 1

// -1 -1 -1 -1 4 24 24 -1



function runProgram(input) {
	input = input.split("\n");

    var size = +input[0];
    var arr = input[1].split(" ").map(Number);
    
    neighbour(size,arr)
}
function neighbour(size,arr)
{
    var ans = [];
    var stack = [];
    for (var num = 0; num < size;num++)
    {
        while(stack.length != 0 && stack[stack.length-1] >= arr[num])
        {
            stack.pop()
        };
        if(stack.length == 0)
        {
            ans[num] = -1;
        }
        else
        {
            ans[num] = stack[stack.length-1]
        }
        stack.push(arr[num]);
    }
    console.log(ans.join(" "));
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
    