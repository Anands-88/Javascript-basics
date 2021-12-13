var day = "Wednesday";
var N = 8;

var obj = {};
var days = ["Monday","Tuesday","Wednesday","Thursday",
            "Friday","Saturday","Sunday"];

for (var num = 0; num < days.length; num++)
{
    obj[days[num]] = num;
}

var bag = null;
for (var key in obj)
{
    if (day == key)
    {   
        bag = (Number(obj[key]) + N) % 7;
    }
}
for (key in obj)
{
    if(bag == obj[key])
    {
        console.log(key);
    }