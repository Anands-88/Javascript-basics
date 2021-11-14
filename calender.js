for(var month = 1; month <= 12; month++)
{ var days = 31;

  if (month == 2)
  {
    days = 28;
  }
  else if (month == 4 || month == 6 || month == 9 || month == 11)
  {
    days = 30;
  }

  for(var day = 1; day<=days; day++)
  {
    console.log(day,"-",month);
  }
  
}
