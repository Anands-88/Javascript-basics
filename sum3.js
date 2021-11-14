arr = [[1, 2, 1, 8],
      [2, 2, 8, 6],
      [8, 1, 2, 5],
      [2, 5, 8, 6]];
var n = arr.length
var m = arr[0].length
var s = 11
    
var count = 0
for(var num = 0; num < n; num++)
{ 
  for(var num2 = 0; num2 < m; num2++)
  {  
    var sum = 0;
    if (num2 < m-2)
    {
      sum = sum + arr[num][num2+0] + arr[num][num2+1] + arr[num][num2+2]
    }
    
    if(sum == s)
    {
      count++
    }
  } 
}

for(var num3 = 0; num3 < m; num3++)
{ 
  for(var num4 = 0; num4 < n; num4++)
  {  
    sum = 0;
    if (num4 < n-2)
    {
      sum = sum + arr[num4][num3] + arr[num4+1][num3] + arr[num4+2][num3]
    }
    if(sum == s)
    {
      count++
    }
  } 
}

for(var num5 = 0; num5 < n; num5++)
{ 
  for(var num6 = 0; num6 < m; num6++)
  {  
    var sum = 0;
    if (num5 < m-2 && num6 < n -2 )
    {
      sum = sum + arr[num5][num6] + arr[num5+1][num6+1] + arr[num5+2][num6+2]
    }
    if(sum == s)
    {
      count++
    }
  } 
}


for(var num7 = n-1; num7 >=0; num7--)
{  
  for(var num8 = 0; num8 < m; num8++)
  {  
    var sum = 0;
    if (num7 > m-3 && num8 < n-2 )
    {
      sum = sum + arr[num7][num8] + arr[num7-1][num8+1] + arr[num7-2][num8+2]
    }
    if(sum == s)
    {
      count++
    }
  } 
}

console.log(count)