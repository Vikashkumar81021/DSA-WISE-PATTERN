let userRoleCount = [
  { userId: 1, role: "user" },
  { userId: 2, role: "admin" },
  { userId: 3, role: "manger" },
  { userId: 4, role: "user" },
  { userId: 5, role: "admin" },
];

let freq = new Map();

for (let roleCount of userRoleCount) {
  if (!freq.has(roleCount.role)) {
    freq.set(roleCount.role, 1);
  } else {
    freq.set(roleCount.role, freq.get(roleCount.role) + 1);
  }
}

console.log(freq);
