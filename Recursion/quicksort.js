// Quickly Sort it Ended
// Description

// You are given an array of N integers. Write QUICK SORT ALGORITHM to sort the numbers in ascending order

// DO NOT USE ANY BUILTIN FUNCTION TO SORT

// ALSO, YOU MUST NOT USE ANY OTHER ALGORITHM


// Input
// Input Format

// First line contains N

// Second line contains N space separated integers

// Constraints

// N < 1000


// Output
// Output Format

// Print the sorted numbers separated by space


// Sample Input 1 

// 5
// 3 5 0 9 8
// Sample Output 1

// 0 3 5 8 9
// Hint

// Sample 1 Explanation

// Expected test case ;)

function runProgram(input){
    
    input = input.split("\n");
    let size = +input[0];
    let arr = input[1].split(" ").map(Number)
   
   sorting(size,arr);
}
function sorting(size,arr)
{
    let start = 0
    let end = size-1;
    
    function quicksort(arr,start,end)
    {
        if(start > end)
        {
            return;
        }
        
        let index = partition(arr,start,end);
        quicksort(arr,start,index-1);
        quicksort(arr,index+1,end)
    }
    
    function partition(arr,start,end)
    {
        let pivot = arr[start];
        left = start;
        right = end;
        
        while(left < right){
            while(arr[left] <= pivot && left < end)
            {
                left++
            }
            while(arr[right] > pivot && right > start)
            {
                right--
            }
            if(left < right)
            {
                [arr[left],arr[right]] = [arr[right],arr[left]]
                
            }
        }
        
        [arr[right],arr[start]] = [arr[start],arr[right]]
        return right
    }
    
    quicksort(arr,start,end)
    console.log(arr.join(" "))
    
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