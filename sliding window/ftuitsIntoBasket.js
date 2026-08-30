var totalFruit = function (fruits) {
  let map = new Map();
  let low = 0,
    res = 0;
  for (let i = 0; i < fruits.length; i++) {
    if (map.has(fruits[i])) {
      map.set(fruits[i], map.get(fruits[i]) + 1);
    } else {
      map.set(fruits[i], 1);
    }
    while (map.size > 2) {
      map.set(fruits[low], map.get(fruits[low]) - 1);
      if (map.get(fruits[low]) === 0) {
        map.delete(fruits[low]);
      }
      low++;
    }
    res = Math.max(res, i - low + 1);
  }
  return res;
};
