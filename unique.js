var a = [3,5,3,3,8,5,6];
var n = a.length;

var obj = {};

for(var num = 0; num < n; num++)
{
  if(obj[a[num]] == undefined)
  {
    obj[a[num]] = 1;
  }
  else
  {
    obj[a[num]] = obj[a[num]] + 1;
  }
}
var sum = 0;
for (var key in obj)
{
    if(obj[key] == 1)
    {
        sum = sum + Number(key);
    }
}
console.log(sum);
