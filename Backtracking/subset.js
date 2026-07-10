function subset(arr, output, temp = [], index = 0) {
  if (index >= arr.length) {
    output.push([...temp]);
    return;
  }

  //include
  temp.push(arr[index]);
  subset(arr, output, temp, index + 1);
  temp.pop();

  //exclude
  subset(arr, output, temp, index + 1);
}

const array = [1, 2, 3];
let out = [];

subset(array, out);
console.log(out);
