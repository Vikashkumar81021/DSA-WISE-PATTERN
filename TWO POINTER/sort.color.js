function sort(arr) {
  let zero = 0,
    one = 0,
    two = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) zero++;
    else if (arr[i] === 1) one++;
    else two++;
  }

  let index = 0;

  for (let i = 0; i < zero; i++) {
    arr[index] = 0;
    index++;
  }
  for (let i = 0; i < one; i++) {
    arr[index] = 1;
    index++;
  }
  for (let i = 0; i < two; i++) {
    arr[index] = 2;
    index++;
  }

  return arr;
}

let arr = [2, 0, 2, 1, 1, 0];
console.log(sort(arr));
