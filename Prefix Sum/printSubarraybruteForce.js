function printSubarrays(arr) {
  for (let i = 0; i < arr.length; i++) {
    let subArray = [];
    for (let j = i; j < arr.length; j++) {
      //   let subArray = [];
      //   for (let k = i; k <= j; k++) {
      //     subArray.push(arr[k]);
      //   }
      subArray.push(arr[j]);
      console.log(subArray);
    }
  }
}
console.log(printSubarrays([1, 2, 3]));
