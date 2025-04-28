// 함수 타입 정의

// 함수를 설명하는 가장 좋은 방법
// => 어떤 매개변수를 받고, 어떤 값을 반환하는지 설명
// => 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 값을 반환하는지 설명
function func(a: number, b: number): number {
  return a + b;
}

// 화살표 함수 타입 정의
const add = (a: number, b: number): number => a + b;

// 함수의 매개변수
function introduce(name = "동윤", age?: number) {
  console.log(`이름은 ${name}`);
  if (typeof age === "number") {
    console.log(`나이는 ${age + 1}`);
  }
}

introduce("동윤", 25);

// Rest Parameter
function sum(...rest: number[]) {
  let result = 0;
  rest.forEach((it) => (result += it));
  return result;
}

console.log(sum(1, 2, 3, 4, 5));
