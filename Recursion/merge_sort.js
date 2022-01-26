// Merge Sorting Ended
// Description

// You are given N numbers. Your task is to write MERGE SORT sorting algorithm (from scratch) 
// to sort those N numbers.

// Input
// Input Format:

// First line of input contains N

// Next line contains N space separated integers.

// Constraints:

// N < 1000000


// Output
// Output the sorted form of provided numbers


// Sample Input 1 

// 5
// 3 5 0 9 8
// Sample Output 1

// 0 3 5 8 9

function runProgram(input){
    
    input = input.split("\n");
    let size = +input[0];
    let arr = input[1].split(" ").map(Number)
   
   sorting(size,arr);
}

function sorting(size,arr)
{
    let start = 0;
    let end = size-1;
    
    function mergeSort(arr,start,end)
    {
        if(start>=end)
        {
            return;
        }
        
        let mid = Math.floor((start+end)/2);
        mergeSort(arr,start,mid);
        mergeSort(arr,mid+1,end);
        merge(arr,start,end,mid);
    }  
    
    function merge(arr,start,end,mid)
    {
        let arr1 = []
        arr1 = arrayCreate(arr,start,mid)
        let arr2 = []
        arr2 = arrayCreate(arr,mid+1,end)
        
        let [left,right,cur] = [0,0,start]
        
        while(left < arr1.length && right < arr2.length)
        {
            if(arr1[left] <= arr2[right])
            {
                arr[cur] = arr1[left]
                left++
            }
            else
            {
                arr[cur] = arr2[right]
                right++
            }
            cur++
        }
        
        while(left < arr1.length)
        {
          arr[cur] = arr1[left];
          left++;
          cur++;
        }
        while(right < arr2.length)
        {
            arr[cur] = arr2[right];
            right++;
            cur++;
        }
    }
    function arrayCreate(arr,start,end)
    {
        let box = []
        for(let num = start; num <= end; num++)
        {
            box.push(arr[num])
        }
        return box
    }
    
    mergeSort(arr,start,end);
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