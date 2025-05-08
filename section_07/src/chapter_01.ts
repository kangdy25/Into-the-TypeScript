// 제네릭

function func(value: unknown) {
  return value;
}

let num1 = func(10);
let bool1 = func(true);
let str1 = func("hello");

function genericFunc<T>(value: T) : T {
  return value;
}

let num2 = genericFunc<number>(10);
let bool2 = genericFunc(true);
let str2 = genericFunc("hello");
