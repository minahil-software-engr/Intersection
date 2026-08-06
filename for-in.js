const object1 = { a: 1, b: 2, c: 3 };
const object2 = { b: 4, c: 5, d: 6 };
function intersectionForIn(object1, object2) {
  const result = {};
  for (let key in object1) {
    if (key in object2) {
      result[key] = object1[key];
    }
  }
  return result;
}
console.log(intersectionForIn(object1, object2));