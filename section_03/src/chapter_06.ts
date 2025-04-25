// 타입 좁히기
// => 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 상황에 따라 타입을 좁힌다.

type Person = {
    name: string;
    age: number;
};

function func(value: number | string | Date | null | Person) {
    value;
    if (typeof value === "number") {
        console.log(value.toFixed());
    } else if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else if (value instanceof Date) {
        console.log(value.getTime());
    } else if (value && "age" in value) {
        console.log(`${value.name}은 ${value.age}살입니다.`);
    }
}
