// Keyof 연산자
function getPropertyKey(person, key) {
    return person[key];
}
const person = {
    name: "동윤",
    age: 25,
};
console.log(getPropertyKey(person, "age"));
export {};
