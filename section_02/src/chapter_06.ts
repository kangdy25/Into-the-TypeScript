// Any (특정 변수의 타입을 확실히 모를 때 사용한다.)

let anyValue: any = 10;
anyValue = "I don't know";
anyValue = true;

let num: number = 5;
num = anyValue;

// Unknown (Any 타입과 비슷하지만, Unknown 타입에서는 반대로 할당 및 연산은 불가능하다.)

let unknownValue: unknown = 7;
unknownValue = "";
unknownValue = () => {};

let str: string = "a";
// 아래의 경우 에러!!
// str = unknownValue;
