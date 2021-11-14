// You are given a strings, you have to find thecountof all such substrings which start and ends with the same character.

var s = "abcab";

var count = 0;
for (var num2 = 0; num2 < s.length; num2++)
{ 
    for(var num3 = num2; num3 < s.length; num3++)
    {  
        var bag = "";
        for(var num4 = num2; num4 <= num3; num4++)
        {
            bag = bag + s[num4];
        }

        var length = bag.length-1;
        if (bag[0] == bag[length])
        {
        count++;
        }

    }  

}
console.log(count);

// Find Palindromic in string and print the length of biggest pelindromic

var S = "thisracecarisgood";
var big = 0;

for (var num = 0; num < S.length; num++)
{ 
  for (var num2 = num; num2 < S.length; num2++)
  { var bag = "";
    for (var num3 = num; num3 <= num2; num3++)
    {
      bag = bag + S[num3];
    }
    
    var bag2 = "";

    for (var num4 = bag.length- 1; num4 >= 0; num4--)
    {
      bag2 = bag2 + bag[num4]
    }
    if (bag == bag2)
    {
      var bag_size = bag.length
      
      
      if (bag_size >= big)
      {
        big = bag_size;
      }
      
    }

  }
  
}
console.log(big)
