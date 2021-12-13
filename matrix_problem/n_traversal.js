var matrix = [[1,2,3]
            [4,5,6]
            [7,8,9]];

var bag = "";
    for (var num = 0; num < matrix.length;num++)
    {
        if (num == 0 || num == matrix.length-1)
        {
            for (var num2 = matrix.length-1; num2 >= 0;num2--)
            {
                bag = bag + matrix[num2][num]+ " ";
            }
        }
        
        if (num > 0 && num < matrix.length-1)
        {
            for (var num3 = 0; num3 < matrix.length;num3++)
            {
                if (num == num3)
                {
                    bag = bag + matrix[num][num] + " ";
                }
            }
        }
        
    }
    console.log(bag);

// for (var num = 0; num < n;num++)
// {
//     for (var num2 = n-1; num2 >= 0; num2--)
//     {
//         if (num == 0 || num == n-1)
//         {
//         bag = bag + arr[num2][num];
//         }
//     }
//     if (num > 0 && num < n-1)
//     {
//         bag = bag + arr[num][num]
//     }
// }

// console.log(bag);