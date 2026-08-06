1. intersectionForIn (for...in Loop)

Ek khali object result = {} initialize hota hai.

for...in loop object1 ki har key par iterate karta hai.

if (key in object2) check karta hai ke kya same key object2 mein majood hai.

Matching key milne par result[key] = object1[key] set karke object1 ki value save kar li jati hai.

2. intersectionKeysFilter (Object.keys + filter + reduce)

Object.keys(object1) se object1 ki saari keys ki ek array banti hai.

.filter() array par chal kar sirf wo keys rakhta hai jo object2 mein majood hon (key in object2).

.reduce() ek khali object {} se accumulation start karta hai.

Har filtered key ke liye object1 ki value result object mein store karke return ki jati hai.

3. intersectionSet (ES6 Set Lookup)

new Set(Object.keys(object2)) se object2 ki keys ka ek ES6 Set banaya jata hai.

Ek khali result = {} object banaya jata hai.

Object.keys(object1).forEach() se object1 ki keys par loop chalta hai.

set2.has(key) instant check karta hai, aur matching key par object1 ki value store kar deta hai.

4. getUnionManual (Manual Union)

Ek khali result = {} object create hota hai.

Pehla for...in loop object1 ke tamam key-value pairs result mein copy karta hai.

Dusra for...in loop object2 ke tamam key-value pairs result mein daalta hai.

Agar koi key pehle se object1 se result mein aayi hui ho, to object2 ki value us par write ho kar usay replace (override) kar deti hai.

Speed Comparison for Large Objects (Step-by-Step)

1. (Set Approach): Sub-millisecond level lookup speed hotay hain kyunki Set.has() ki time complexity O(1) hai. Large datasets (100,000+ keys) par ye sabse fast kaam karta hai.

2. (for...in Loop): Medium datasets ke liye bohot fast hai kyunki ye extra memory arrays create nahi karta. Lekin bohot bade objects par prototype chain lookup ki wajah se processing slow ho sakti hai.

3. (Object.keys + filter + reduce): Sabse slow perform karta hai kyunki ye multiple intermediate arrays (pehle keys ki array, phir filter ki array) memory mein banata hai aur multi-step function execution chalata hai.
