// You are given an arrayAwithNelements.You are allowed toremove only one element, 
//  which makes thesum of all the remaining elements exactly divisible by 7.

// Your task is to find thefirst index of smallest elementthat can be removed from array. 
// If there is no answer print-1

var N = 5;
var A = [14,2,8,7,4];

function applyBasicMaths(N,A)
{
    var bag = 0;
    var sum = 0;
    for (var num = 0; num < N; num++)
    {   
        sum = sum + A[num];
    }

    for (var num3 = 0; num3 < N; num3++)
    {
        if ((sum - A[num3]) % 7 === 0)
        {
            if (bag === 0 || bag > A[num3])
            {
                bag = A[num3];
            }
        }
    }
    
    if (bag === 0)
    {
        console.log(-1);
    }
    else
    {
        console.log(A.indexOf(bag));
    }
}

applyBasicMaths(N,A)