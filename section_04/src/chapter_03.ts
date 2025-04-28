// 함수 타입의 호환성

// 1. 반환값의 타입이 호환되는가?
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

// 가능, 업캐스팅
a = b;
// 불가능, 다운캐스팅
// b = a;

// 2. 매개변수의 타입이 호환되는가?
// 2-1. 매개변수의 개수가 같을 때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// 가능, 다운캐스팅
d = c;
// 불가능: 업캐스팅
// c = d;

// 2-2. 매개변수의 개수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// 요건 에러
// func2 = func1;
