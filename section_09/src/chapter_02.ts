// 분산적인 조건부 타입

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>;
// StringNumberSwitch<number> => string
// StringNumberSwitch<string> => number

let d: StringNumberSwitch<boolean | number | string>;
// StringNumberSwitch<boolean> => number
// StringNumberSwitch<number> => string
// StringNumberSwitch<string> => number

// 실용적인 예제
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
