let matrix = [
  [5, 10, 15],
  [20, 25, 30],
  [35, 40, 45],
];
let sum = 0;
// console.log(matrix[0][2]);
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    sum += matrix[i][j];
  }
}
// console.log(sum);

// i (row)	j (column)	Output
// 0	         0	     10
// 0             1	     20
// 0	         2	     30
// 1	        0	     40
// 1	         1	     50
// 1	         2   	60
// 2	          0	    70
// 2	           1	80
// 2            	2	90

function largest(matrix) {
  let max = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > max) {
        max = matrix[i][j];
      }
    }
  }
  return max;
}
console.log(largest(matrix));
