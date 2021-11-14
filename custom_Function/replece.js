var strings = "The quick brown fox jumps over the lazy dog If the dog reacted, was it really lazy?";

function replace_string(word, replace)
{ 
  var bag = "";
  var list = "";
  for (var num = 0; num < strings.length; num++)
  {
    if (strings[num] != " ")
    { 
      bag = bag + strings[num]
    }
    else
    {
      if (bag == word)
      {
        bag = replace;
      }
      list = list + bag + strings[num]
      bag = ""
    }
  }
  list = list + bag;

  
  return list
}

var word = "fox";
var replace = "rabbit";
var a = replace_string(word, replace);

var b = strings.replace(word, replace);

console.log(a)
console.log(b)

console.log(a == b)
