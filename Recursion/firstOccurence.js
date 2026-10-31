function firstOccurence(arr, tar, i = 0) {
  //hmne -1 return keya q ki agar sare array traverse kr leya hmne eleemt nhe mila toh -1 return ho jaae

  if (i === arr.length) return -1;
  //agar eleemnt mil gya tih yaha se return ho jaaeeyga aur aage traverse nhe krega
  if (arr[i] === tar) {
    return i;
  }

  return firstOccurence(arr, tar, i + 1);
}
let arr = [4, 7, 9, 7, 2];
let target = 9;
console.log(firstOccurence(arr, target));
