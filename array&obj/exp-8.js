let users = [
  { id: 1, name: "A", city: "Delhi" },
  { id: 2, name: "B", city: "Noida" },
  { id: 3, name: "C", city: "Delhi" },
  { id: 4, name: "D", city: "Gurgaon" },
  { id: 5, name: "E", city: "Noida" },
  { id: 6, name: "F", city: "Delhi" },
];

let freq = {};
for (let i = 0; i < users.length; i++) {
  if (freq[users[i].city]) {
    freq[users[i].city]++;
  } else {
    freq[users[i].city] = 1;
  }
}
// console.log("freq", freq);

let employees = [
  { id: 1, name: "A", department: "IT", salary: 50000 },
  { id: 2, name: "B", department: "HR", salary: 40000 },
  { id: 3, name: "C", department: "IT", salary: 60000 },
  { id: 4, name: "D", department: "HR", salary: 45000 },
  { id: 5, name: "E", department: "Sales", salary: 55000 },
];
let deparmentSalary = {};
for (let i = 0; i < employees.length; i++) {
  //   console.log(employees[i].salary);

  if (deparmentSalary[employees[i].department]) {
    deparmentSalary[employees[i].department] += employees[i].salary;
  } else {
    deparmentSalary[employees[i].department] = employees[i].salary;
  }
}
// console.log("sal", deparmentSalary);

let duplicateUsers = [
  { id: 1, name: "A", email: "a@gmail.com" },
  { id: 2, name: "B", email: "b@gmail.com" },
  { id: 3, name: "C", email: "a@gmail.com" },
  { id: 4, name: "D", email: "c@gmail.com" },
  { id: 5, name: "E", email: "b@gmail.com" },
];

let map = {};
for (let i = 0; i < duplicateUsers.length; i++) {
  let email = duplicateUsers[i].email;
  if (map[email]) {
    map[email]++;
  } else {
    map[email] = 1;
  }
}
let duplicates = [];
for (let email in map) {
  if (map[email] > 1) {
    duplicates.push(email);
  }
}

console.log(duplicates);
