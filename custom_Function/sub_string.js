
string= 'Mozilla';

function subString(strt,end)
{ 
  var bag = "";

  if (end == undefined)
  {
    end = string.length;
  }
  for (var num = strt; num < end;num++)
  {
    bag = bag + string[num];
  }
  return bag;
}

var start = 1;
var end = 4;
var custom = subString(start,end);

var original = string.substring(start,end);

console.log(custom);

console.log(original);