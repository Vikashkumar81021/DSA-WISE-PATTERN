// []
// [1]
// [2]
// [3]
// [1, 2]
// [1, 3]
// [2, 3]
// [1, 2, 3]

function chooseArray(arr, output, temp = [], index = 0) {
  if (index === arr.length) {
    output.push([...temp]);
    return;
  }
  temp.push(arr[index]);
  chooseArray(arr, output, temp, index + 1);

  temp.pop();
  chooseArray(arr, output, temp, index + 1);
}
let res = [];
let a = [1, 2, 3];
chooseArray(a, res);

// res.forEach((item) => {
//   console.log(JSON.stringify(item));
// });
console.log(res);
