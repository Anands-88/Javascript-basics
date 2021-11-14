var R = 3;
var C = 3;
matrix = [[1,2,3],
         [4,5,6],
        [7,8,9 ]];
var K = 6;

function specificDiagonals(R, C, matrix, K){
    var r = 0;
    var c = 0;
    for (var num = 0; num < R; num++)
    {
        for (var num2 = 0; num2 < C; num2++)
        {
            if(matrix[num][num2] == K)
            {
                r = num;
                c = num2;
            }
        }
    }
    var left = r-c;
    var bag = "";
    for (var num3 = 0; num3 < R; num3++)
    {
        for (var num4 = 0; num4 < C; num4++)
        {
            if( num3 - num4 == left)
            {
                bag = bag + matrix[num3][num4] + " ";
            }
        }
    }
    var bag2 = "";
    var right = r + c;
    
    for (var num5 = 0; num5 < R; num5++)
    {
        for (var num6 = 0; num6 < C; num6++)
        {
            if( num5 + num6 == right)
            {
                bag2 = bag2 + matrix[num5][num6] + " ";
            }
        }
    }
    console.log(bag);
    console.log(bag2);
}

specificDiagonals()