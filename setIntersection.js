const object1 = { a: 1, b: 2, c: 3 };
const object2 = { b: 4, c: 5, d: 6 };
function intersectionSet(object1, object2) {
  const set2 = new Set(Object.keys(object2));
  const result = {};
  Object.keys(object1).forEach((key) => {
    if (set2.has(key)) {
      result[key] = object1[key];
    }
  });
  return result;
}
console.log(intersectionSet(object1, object2));
