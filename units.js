// Electricity consumption is measured via slab rates for a particular wattage capacity, which is as follows

//UNITS CONSUMED - PRICE PER UNIT 
//     0 - 50              3
//     51 - 150            5
//     150 above           10
// // Apart from the slab rates, a fixed charge of Rs. 80 is also added to every bill.

// You are given total amount of bill, N , you need to find total unit consumed.

// IF TOTAL AMOUNTS == 930.
   
var n = 930

var units = 0;
var first_unit = 50 * 3;
var second_unit = 100 * 5;
var balance = n - 80;
    
if (balance <= first_unit)
{
    var unit1 = balance / 3;
    console.log(unit1);
}    
else if (balance <=  second_unit + first_unit )
{   
    balance = balance - first_unit;
    var unit2 = balance / 5 + 50;
    console.log(unit2);
}
else
{
    units = 50 + 100;
    balance = balance - first_unit - second_unit;
    var unit3 = balance / 10;
    console.log(units + unit3);
}
