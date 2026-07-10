// // enjoy();
// party();

// function enjoy() {
//   console.log("enjoy chll rha");
//   msti();
// }
// function msti() {
//   console.log("msti chl rhe hai");
//   //   party();
// }
// function party() {
//   console.log("party chl rha hai");
//   enjoy();
// }

function print(n) {
  if (n == 0) return 0; //1.5 2.4 3.3 2.2 1
  console.log(n);
  print(n - 1);
}
print(5);
