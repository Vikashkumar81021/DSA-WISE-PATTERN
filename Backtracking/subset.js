// function subset(arr, output, temp = [], index = 0) {
//   if (index >= arr.length) {
//     output.push([...temp]);
//     return;
//   }

//   //include
//   temp.push(arr[index]);
//   subset(arr, output, temp, index + 1);
//   temp.pop();

//   //exclude
//   subset(arr, output, temp, index + 1);
// }

// const array = [1, 2, 3];
// let out = [];

// subset(array, out);
// console.log(out);
function subSet(arr, temp = [], index = 0) {
  if (index >= arr.length) {
    console.log(temp);
    return;
  }

  if (arr[index] === 1) {
    subSet(arr, temp, index + 1);
    return;
  }

  temp.push(arr[index]);
  subSet(arr, temp, index + 1);
  temp.pop();

  subSet(arr, temp, index + 1);
}

let arr = [1, 2];
// subSet(arr);

let a = [2, 1, 4, 3];
let b = [...a];
console.log(b.sort());
