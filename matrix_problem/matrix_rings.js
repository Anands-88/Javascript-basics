// Rotate Elements Ended
// Description

// Given a n by n matrix. You have to rotate the elements of each ring of the matrix in the clockwise direction one place.


// Input
// Input Format

// First line will contain a single number n

// Next n lines will contain the matrix

// Constraints

// n<=1000

// Elements of the matrix <=10000




// Output
// You have to display the rotated matrix


// Sample Input 1 

// 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// Sample Output 1

// 1 1 2 3
// 1 2 2 4
// 1 3 3 4
// 2 3 4 4
// Hint

// Consider this matrix in the form of two rings and rotate the ring by one place in the clockwise direction

function runProgram(input){
    input =input.split("\n")
    const size = +input[0];
    let bag = [];
    for(let num = 0; num < size;num++)
    {
        bag.push(input[num+1].split(" ").map(Number));
    }
    
    rotate(size,bag)
}
function rotate(size,arr)
{
    let R = arr.length;
    let C = arr[0].length;
    
    let row = 0; col = 0;
    let prev; let curr;
    
    while(row < R && col < C)
    {
        if(row == R-1 || col == C-1)
        {
            break;   
        }
    
        prev = arr[row + 1][col];

        for(let i = col; i < C; i++)
        {
            curr = arr[row][i]; 
            arr[row][i] = prev;  
            prev = curr; 
        }
        row++;

        for(let i = row; i < R; i++)  // 1 to 4
        {
            curr = arr[i][C - 1]; // 1 3
            arr[i][C - 1] = prev;
            prev = curr;
        }
        C--;

        if (row < R)
        {
            for(let i = C - 1; i >= col; i--)
            {
                curr = arr[R - 1][i];
                arr[R - 1][i] = prev;
                prev = curr;
            }
        }
        R--;

        if (col < C)
        {
            for(let i = R - 1; i >= row; i--)
            {
                curr = arr[i][col];
                arr[i][col] = prev;
                prev = curr;
            }
        }
        col++;
    }
 
    R = arr.length; C= arr[0].length;
    for(let i = 0; i < R; i++)
    {
        let bag = "";
        for(let j = 0; j < C; j++)
          {
              bag = bag+arr[i][j]+" "
              
          }
         
         console.log(bag)
    
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