function sum(n, i = 5, add = 0) {
  if (n > i) {
    return add;
  }

  return sum(n + 1, i, add + n);
}
console.log(sum(1));

//1,2,3,4,5

/*
call stack mein hoga
sum(1)
return 14+1
check condtion-fail 
sum(2)
return 12+2
check condtion-fail 
sum(3)
return 9+3=12
check condtion-fail 
sum(4)
return 5+4=9
check condtion-fail 
sum(5)
return add+=5 add=5
*/
