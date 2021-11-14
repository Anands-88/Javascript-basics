
var word = "javascript";

var vowels = "aeiou";
var bag = "";
for (var num = 0; num < word.length; num++)
{
  for (var num2 = 0; num2 < 5; num2++)
  {
    if (word[num] == vowels[num2])
    {
      bag = bag + word[num]
    }
  }
}
var obj = {};

for (var num3 = 0; num3 < 5; num3++)
{
  obj[vowels[num3]] = 0;
}

for (num4 = 0; num4 < bag.length; num4++)
{
  obj[bag[num4]] = obj[bag[num4]] + 1;
}
var bag2 = ""
for (var key in obj)
{
  if (obj[key] == 0)
  {
    bag2 = bag2 + key
  }
}
if(bag2 == "")
{
  console.log(-1)
}
else
{
  console.log(bag2)
}