function EarningMore(emp) {
  let res = [];
  for (let i = 0; i < emp.length; i++) {
    for (let j = 0; j < emp.length; j++) {
      if (emp[i].managerId === emp[j].id) {
        if (emp[i].salary > emp[j].salary) {
          res.push(emp[i].name);
        }
      }
    }
  }
  return res;
}

function employeeHaveManager(emp) {
  let res = [];
  for (let i = 0; i < emp.length; i++) {
    if (emp[i].managerId !== null) {
      res.push(emp[i].name);
    }
  }
  return res;
}
function employeEarn(emp) {
  let res = [];
  for (let i = 0; i < emp.length; i++) {
    if (emp[i].salary >= 40000) {
      res.push(emp[i].name);
    }
  }
  return res;
}

function employeesByManager(emp) {
  let res = [];
  for (let i = 0; i < emp.length; i++) {
    if (emp[i].managerId === 3) {
      res.push(emp[i].name);
    }
  }
  return res;
}
const employees = [
  { id: 1, name: "Aman", salary: 30000, managerId: 3 },
  { id: 2, name: "Riya", salary: 45000, managerId: 4 },
  { id: 3, name: "Karan", salary: 50000, managerId: null },
  { id: 4, name: "Priya", salary: 35000, managerId: 3 },
  { id: 5, name: "Rahul", salary: 60000, managerId: 2 },
];
// const employees = [
//   { id: 1, name: "Joe", salary: 70000, managerId: 3 },
//   { id: 2, name: "Henry", salary: 80000, managerId: 4 },
//   { id: 3, name: "Sam", salary: 60000, managerId: null },
//   { id: 4, name: "Max", salary: 90000, managerId: null },
// ];
console.log(employeesByManager(employees));
