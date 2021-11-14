var num = 215;
var reverse = 0;

last_digit = num % 10;

middle_numbers = num % 100;

middle_digits = (middle_numbers- last_digit) / 10

first_digit = (num - middle_numbers) / 100

reverse = last_digit+""+ middle_digits+"" + first_digit;

console.log(reverse);
