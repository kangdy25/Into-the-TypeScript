// 조건부 타입

type A = number extends string ? string : number;

type objA = {
    a: number;
};

type objB = {
    a: number;
    b: number;
};

type B = objB extends objA ? number : string;

// 조건부 타입과 제네릭
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;
let varB: StringNumberSwitch<string>;

function removeSpaces<T>(text: T): T extends string ? string : undefined;

function removeSpaces<T>(text: any) {
    if (typeof text === "string") {
        return text.replaceAll(" ", "");
    } else {
        return undefined;
    }
}

let result1 = removeSpaces("Hello World~ !!");

let result2 = removeSpaces(undefined);
