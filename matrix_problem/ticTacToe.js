matrix =   [['x','o','x'],
            ['o','o','x'],
            ['x','o','o']];

var bag1 = "";  // DIAGONAL X,X,O, LEFT TOP TO RIGHT BOTTOM
var n = matrix.length;
for (var num = 0; num < n; num++)
{
//     bag1 = bag1 + matrix[num][num];
// }

// var bag2 = ""; // DIAGONAL, LEFT BOTTOM TO RIGHT TOP
// for (var num2 = 0; num2 < n; num2++)
// {
//     for (var num3 = 0; num3 < n; num3++)
//     {
//         if (num2 + num3 == n-1)
//         {
//             bag2 = bag2 + matrix[num2][num3];
//         }
//     }
// }
// // ROWS 0,1,2 AND COLUMNS 0,1,2
// for (var num4 = 0; num4 < n; num4++)
// {     
//     var bag3 = "";
//     var bag4 = "";
//     for (var num5 = 0; num5 < n; num5++)
//     {
//         bag3 = bag3 + matrix[num4][num5];
//         bag4 = bag4 + matrix[num5][num4];
//     }

//     if (bag3 == "xxx" ||  bag2 == "xxx" || bag1 == "xxx" || bag4 == "xxx")
//     {
//         console.log("x");
//         break;
//     }
//     else if (bag4 == "ooo" || bag3 == "ooo" ||  bag2 == "ooo" || bag1 == "ooo")
//     {
//         console.log("o");
//         break;
//     }
// }

    if (matrix[num][0] == "x" && matrix[num][1] == "x" && matrix[num][2] == "x")
    {
        bag1 = 'x';
    }
    if (matrix[0][num] == "x" && matrix[1][num] == "x" && matrix[2][num] == "x")
    {   
        bag1 = 'x';
    }
    if (matrix[0][0] == "x" && matrix[1][1] == "x" && matrix[2][2] == "x")
    {   
        bag1 = 'x';
    }
    if (matrix[0][2] == "x" && matrix[1][1] == "x" && matrix[2][0] == "x")
    {   
        bag1 = 'x';
    }
    else
    {
        bag1 = 'o';
    }

}
console.log(bag1)