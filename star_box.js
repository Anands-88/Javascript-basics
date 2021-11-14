for (var row = 1; row  <= 10; row++)
{ var box = ""
  for (var column= 1; column <= 10; column++)
  { 
    if (row > 1 && row < 10) 
    { 
      if (column > 1 && column < 10)
      {
        box = box + " ";
        continue;
      }
    }
    box = box + "*";
  }
  console.log(box)
}
