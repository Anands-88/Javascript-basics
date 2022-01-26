// Mr Robot - Elliot Ended
// Description

// Mr.Robot needs an encryption method, so Elliott was there to help him. 
// At the same time, Richard wrote a paper on encryption. 
// Elliott then started writing his algorithms with the help of paper from Richard 
// but he needs your help in implementing. The algorithm is like this:

// Given an input string, the encrypted string will start with the middle character of the string and 
// will be formed henceforth with the middle characters of the left and right 
// substrings (of the middle character of the word) and so on. 
// Take a look at the explanation of the sample test case for better understanding.


// Input
// Input Format :

// The first line contains an integer T denoting the number of TEST CASES. 
// Each TEST CASE consists of 2 lines. The first line contains an integer N denoting the length of the word 
// that needs to be encrypted. The second line contains the word that needs to be encrypted.

// Constraints :

// 1 <= T <= 10

// 1 <= Length of the string <= 10000


// Output
// N lines where each line will contain the encrypted words


// Sample Input 1 

// 3
// 3
// abc
// 4
// abcd
// 11
// abcdefghijk
// Sample Output 1

// bac
// bacd
// fcabdeighjk
// Hint

// For abc, initially, ans is "",

// 1. Middle character for abc is b, so the answer becomes "b", and strings are a and c.

// 2. Now the middle character of the string "a" is a, so the answer becomes "ba".

// 3. Now the middle character of the string "c" is c, so the answer becomes "bac".

function runProgram(input){
    
    input = input.split("\n");
    let tc = +input[0];
    let line =1;
    for (let num = 0; num < tc; num++)
    {
        let size = +input[line];
        line++;
        let str = input[line];
        line++;
        
        robot(size,str);
    }
}
function robot(size,str)
{
    let i = 0; 
    let j = str.length-1;
    let ans = ''
    
    function solve(str,i,j,ans)
    {
        if(i>j) return ans;
        let n = i+j;
        let mid = Math.floor(n/2);
        ans = ans + str[mid] + solve(str,i,mid-1,ans) + solve(str,mid+1,j,ans)
        return ans;
        
    }
    console.log(solve(str,i,j,ans))
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