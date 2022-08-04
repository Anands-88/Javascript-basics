
// Problem:

// 1 2 3 4 5 6 7 8 9
//   1 2 3 4 5 6 7
//     1 2 3 4 5 
//       1 2 3
//         1
//       1 2 3
//     1 2 3 4 5 
//   1 2 3 4 5 6 7
// 1 2 3 4 5 6 7 8 9

// SOLUTION

let arr = [1,2,3,4,5,6,7,8,9]
let numberSize = arr.length
let length = arr.length-2;

function mirrorGame()
  {
    let one = 0;
    while(numberSize > 0)
    {
      console.log(arr.join(" "))
      arr.splice(length,2)
      arr.push(" ")
      arr.unshift(" ")
      if(numberSize == 3)
      {
         one = arr.indexOf(1)
      }
      length = length - 1
      numberSize = numberSize - 2
    }
  
    arr[one] = 1;
    let num = 2;
    numberSize = 3
    while(numberSize <= 9)
      {
        arr.shift()
        arr[one] = num
        arr[one+1] = num+1
        if(numberSize < 9)
        {
          arr.push(" ")
        }
        num+=2
        one++
        console.log(arr.join(" "))
        numberSize = numberSize + 2
      }
    
  }

mirrorGame()