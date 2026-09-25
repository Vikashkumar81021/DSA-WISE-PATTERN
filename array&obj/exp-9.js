let students = [
  {
    id: 1,
    name: "A",
    marks: [80, 70, 90],
  },
  {
    id: 2,
    name: "B",
    marks: [60, 75, 65],
  },
  {
    id: 3,
    name: "C",
    marks: [90, 95, 85],
  },
];
let avg = [];

for (let i = 0; i < students.length; i++) {
  let mark = students[i].marks;

  let sum = 0;
  for (let j = 0; j < mark.length; j++) {
    sum += mark[j];
  }
  let res = sum / mark.length;
  avg.push({
    name: students[i].name,
    average: res,
  });
}
console.log("sum", avg);
