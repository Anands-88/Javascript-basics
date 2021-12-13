// You are given a ciphered string, you have to decipher the string.

// For example, if the given string is "a2b1c2", then the deciphered string will be "aabcc".

// Note: The string contains only lower-case letters and numbers.

// Note : You have to take the input yourself

// Input
// The first line of the input contains T, the number of test cases.

// The first line of each test case contains N, the length of the string.

// The next line contains the string, for which the decipher string is to be generated.

// Constraints

// 1 <= T <= 10

// 1 <= N <= 200


// Output
// For each test case, print the deciphered string for the given string, on a new line.


// Sample Input 1 

// 2
// 6
// a2b1c2
// 6
// a2z1a2
// Sample Output 1

// aabcc
// aazaa
// Hint

// For the first sample test case, the deciphered string will be aabcc.

// For the second sample test case, the deciphered string will be aazaa.

function runProgram(input) {

    input = input.split("\n");
    var testcase = +input[0];
    var line = 1;
	
	for (var num = 0; num < testcase; num++)
	{
	    var size = +input[line];
	    line++;
	    var arr = input[line].split("");
	    line++;
	   decipherString(size,arr);
	}
}

function decipherString(n,arr){

    var bag = "";
    var box = "";
    for (var num = 0; num < n;num++)
    {
        
        bag = bag + arr[num]+"";
        if (num % 2 == 1)
        {
            for (var num2 = 0; num2 < +bag[1];num2++)
            {
                box = box + bag[0];
            }
            bag = "";
        }
        
    }
    
    console.log(box);
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