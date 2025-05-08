// 첫 번째 사례
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap(1, 2);

// 두 번째 사례
function returnFirst<T>(data: [T, ...unknown[]]) {
  return data[0]
}

let num = returnFirst([1, 2, 3]);
let str = returnFirst([1, "hello", "world"]);

// 세 번째 사례
function getLength<T extends {length: number}>(data: T) {
  return data.length;
}

let var1 = getLength("123");
let var2 = getLength([1, 2, 3]);
let var3 = getLength({ length: 3 });
// let var4 = getLength(123);
