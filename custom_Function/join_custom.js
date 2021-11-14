
var array = ["Write", "custom","function", "that", "has","the","same", "behavior","inbuilt","Array","Join","Function"]

function join_strings(seperator)
{ 
  var strings = "";
  for (var num = 0; num < array.length; num++)
  {
    if (seperator == undefined)
    {
      seperator = ",";
    }

    if (num != array.length - 1 )
    {
      strings = strings + array[num] + seperator;
    }
    else
    {
      strings = strings + array[num];
    }
  }
  return strings;
}
var sep_by = "_";

var custom_function = join_strings(sep_by);

var original = array.join(sep_by);

console.log(custom_function,"\n");
console.log(original,"\n");
console.log(custom_function == original);

