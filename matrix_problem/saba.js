// Description

// You are given an arraymatrixofnrows andmcolumns which contains lower case English letters.

// How many times does the phrase "saba" appear horizontally, vertically, and diagonally in the grid?

// OJ2.png


// Input
// Input Format

// First line: Two integer n and m, where n denotes the number of rows and m denotes the number of columns in the grid

// Next n lines: Each line contains m characters which contains lower-case English letters only

// Constraints

// 1 <= n,m <= 100


// Output
// Output Format

// Print the number of times the word “saba” appears in the grid.


// Sample Input 1 

// 5 5
// safer
// amjad
// babol
// aaron
// songs
// Sample Output 1

// 2

function twoArrayAndPhrase(n, m, arr){
    
    let count = 0;
    for (let i=0;i<n;i++){
        for (let j=0;j<m;j++){
         if (j<m-3)
         {
            let  temp = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i][j+3] //horizontal traversal
             if (temp == "saba")
             {
                  count++
             }
         }
        if (i<n-3)    
        {
           let temp = arr[i][j] + arr[i+1][j] + arr[i+2][j] + arr[i+3][j]
            if(temp == "saba")
            {
                count++
            }
            
        }
        if (i<n-3 && j<m-3)
        {
            let temp = arr[i][j] + arr[i+1][j+1] + arr[i+2][j+2] + arr[i+3][j+3]
            if (temp == "saba")
            {
                count++
            }
        }
        if (i>=3 && j<m-3)
        {
           let temp = arr[i][j] + arr[i-1][j+1] + arr[i-2][j+2] + arr[i-3][j+3]
            if (temp == "saba")
            {
               count++ 
            }
        }
              
              
        }
    }
  console.log(count)
}
