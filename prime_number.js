var num = 100;
for (var start = 2; start<=num; start++)
{ var count = 0;
  for (var sec = 2; sec <= num; sec++)
  {
    if (start%sec == 0)
    {
      count++
    }
  }
  if (count == 1)
  {
    console.log("Prime : ",start)
  }
}
