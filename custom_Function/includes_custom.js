
var arrays = ["Write", "custom","function","that", "has", "the", "same", "behavior", "inbuilt","Array" ,"Includes", "Function"];

function include(word,index)
{
  for (var num = index;num < arrays.length; num++)
  { 
    var result = "";
    if (index == undefined)
    {
      index = num;
    }
    else
    {
      index = index;
    }
    
    if (arrays[num] == word)
    {
      result = true;
      break;
    }
    else
    {
      result = false;
    }
    
  }
  return result;
}

var word = "Array";
var fromindex = 2;

console.log("custom function");
console.log(include(word,fromindex));

console.log("original");
console.log(arrays.includes(word,fromindex));
