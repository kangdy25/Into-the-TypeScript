// Keyof 연산자

interface Person {
    name: string;
    age: number;
}

function getPropertyKey(person: Person, key: keyof typeof person) {
    return person[key];
}

const person = {
    name: "동윤",
    age: 25,
};

console.log(getPropertyKey(person, "age"));
