// Symmetric Or Not? Ended
// Description

// You are given some matrices consist of only 0 's and  1's and you have to pick which are symmetric and which are not

// A matrix is said to be symmetric about X- axis if 1st row is identical to n-th row, 2nd is identical to (n-1)th  row and so on.

// A matrix is said to be symmetric about Y- axis if 1st column is identical to the nth column, 2nd identical to (n-1)th and so on for all columns.

// Your task is to print "YES" if it is symmetric about X-axis and Y-axis else "NO"


// Input
// Input Format :

// First line contains T - number of test cases.

// First line of each test case contains the n size of matrix.

// Next n lines contains n characters.

// Constraints :

// 1 ≤ T ≤ 10

// 2 ≤ N ≤ 32




// Output
// Print YES or NO in a new line for each test case .


// Sample Input 1 

// 5
// 2
// 11
// 11
// 4
// 0101
// 0110
// 0110
// 0101
// 4
// 1001
// 0000
// 0000
// 1001
// 5
// 01110
// 01010
// 10001
// 01010
// 01110
// 5
// 00100
// 01010
// 10001
// 01010
// 01110
// Sample Output 1

// YES
// NO
// YES
// YES
// NO
// Hint

// Output Explanation :

// Test Case 1: Symmetric about both axes, so YES.

// Test Case 2: Symmetric about X-axis but not symmetric about Y-axis, so NO.

// Test Case 3: Symmetric about both axes, so YES.


function runProgram(input) {
    
    input = input.split("\n");
    var testcase = +input[0];
    var line = 1;
    for (var num = 0; num < testcase; num++)
    {
        var size = +input[line];
        var bag = [];
        line++;
        for(var num2 = 0; num2 < size; num2++)
        {
            bag.push(input[line]);
            line++;
        }
        
        symmetric(size,bag);
    }
}

function symmetric(s,bag){
    
    var result = true;
    
    for (var num = 0; num < s; num++)
    {
        if (bag[num] != bag[s-1-num])
        {
            result = false;
        }
    }
    
    l = Math.floor(s/2)
    for (var num2 = 0; num2 < l; num2++)
    {
        var bag2 = "";
        var bag3 = "";
        for (var num3 = 0; num3 < s; num3++)
        {
            bag2 = bag2 + bag[num3][num2]
            bag3 = bag3 + bag[num3][s-num2-1]
        }
        
        if (bag2 != bag3)
        {
            result = false;
        }
    }
    
    if (result == true)
    {
        console.log("YES");
    }
    else
    {
        console.log("NO");
    }
    
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