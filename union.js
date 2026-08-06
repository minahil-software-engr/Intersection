const object1 = { a: 1, b: 2, c: 3 };
const object2 = { b: 4, c: 5, d: 6 };
function getUnionManual(object1, object2) {
  const result = {};
  for (let key in object1) {
    result[key] = object1[key];
  }
  for (let key in object2) {
    result[key] = object2[key]; // Agar key pehle se hui, to obj2 usay override kar dega
  }
  return result;
}
console.log(getUnionManual(object1, object2));