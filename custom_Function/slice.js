
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

function slicing(from,to)
{ 
  var bag = [];
  if (to == undefined || to >= animals.length)
  {
    to = animals.length
  }
  for (var num = from; num < to; num++)
  {
    bag.push(animals[num])
  }
  return bag;
}


var first = 1;
var last = 3;
var custom = slicing(first, last);

var original = animals.slice(first, last);

console.log(custom)

console.log(original)