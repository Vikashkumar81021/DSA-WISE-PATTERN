function subset(arr, output, temp = [], index = 0) {
  if (index >= arr.length) {
    output.push([...temp]);
    return;
  }

  temp.push(arr[index]);
  subset(arr, output, temp, index + 1);
  temp.pop();
  while (index + 1 < arr.length && arr[index] === arr[index + 1]) {
    index++;
  }
  subset(arr, output, temp, index + 1);
}

const array = [1, 1, 2, 3];
array.sort((a, b) => a - b);
let out = [];

subset(array, out);
console.log(out);
