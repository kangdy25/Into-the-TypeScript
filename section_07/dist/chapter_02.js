// 첫 번째 사례
function swap(a, b) {
    return [b, a];
}
const [a, b] = swap(1, 2);
// 두 번째 사례
function returnFirst(data) {
    return data[0];
}
let num = returnFirst([1, 2, 3]);
let str = returnFirst([1, "hello", "world"]);
// 세 번째 사례
function getLength(data) {
    return data.length;
}
let var1 = getLength("123");
let var2 = getLength([1, 2, 3]);
let var3 = getLength({ length: 3 });
export {};
// let var4 = getLength(123);
