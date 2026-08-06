const object1 = { a: 1, b: 2, c: 3 };
const object2 = { b: 4, c: 5, d: 6 };
function intersectionKeysFilter(object1, object2) {
  return Object.keys(object1)
    .filter((key) => key in object2)
    .reduce((result, key) => {
      result[key] = object1[key];
      return result;
    }, {});
}
console.log(intersectionKeysFilter(object1, object2));
