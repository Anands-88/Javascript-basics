var arr =  [[1,2,3]
        [4,5,6]
        [7,8,9]];
var N = 3

var bag = "";
    for (var num = 0; num < N;num++)
    {
        if (num == 0 || num == N-1)
        {
            for (var num2 = 0; num2 < N;num2++)
            {
                bag = bag + arr[num][num2]+ " ";
            }
        }
        
        if (num > 0 && num < N-1)
        {
            for (var num3 = 0; num3 < N;num3++)
            {
                if (num + num3 == N-1)
                {
                    bag = bag + arr[num][num3] + " ";
                }
            }
        }
        
    }
    console.log(bag);