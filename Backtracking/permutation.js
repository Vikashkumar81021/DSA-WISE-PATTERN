function permmutation(arr, outputArr, temp = []) {
  if (temp.length === arr.length) {
    outputArr.push([...temp]);
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (temp.includes(arr[i])) continue;
    temp.push(arr[i]);
    permmutation(arr, outputArr, temp);
    temp.pop();
  }
}

let arr = [1, 2, 3];
let output = [];
permmutation(arr, output);
console.log(output);
