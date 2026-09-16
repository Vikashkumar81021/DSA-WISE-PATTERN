const departments = [
  {
    name: "IT",
    employees: [
      { name: "A", salary: 5000 },
      { name: "B", salary: 6000 },
    ],
  },
  {
    name: "HR",
    employees: [
      { name: "C", salary: 4000 },
      { name: "D", salary: 4400 },
    ],
  },
];
//B-6000
// let max = 0;
// for (let i = 0; i < departments.length; i++) {
//   if (departments[i].employees[i].salary > max) {
//     max = departments[i].employees[i].namesalary;
//   }
// }
// console.log("max", max);
let max = 0;
let maxName = "";

for (let i = 0; i < departments.length; i++) {
  for (let j = 0; j < departments[i].employees.length; j++) {
    if (departments[i].employees[j].salary > max) {
      max = departments[i].employees[j].salary;
      maxName = departments[i].employees[j].name;
    }
  }
}

console.log(maxName, max);
