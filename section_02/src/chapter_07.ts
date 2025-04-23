// void (아무 것도 없음을 의미한다.)
function func1(): string {
  return "Hello";
}

function func2(): void {
  console.log("Hello");
}

// void 타입에 일반적인 값 할당 불가능하고, undefined만 할당 가능
// tsconfig에서 nullcheck를 꺼주면 void 타입에 null도 할당 가능

// let a : void = 1;
let b: void = undefined;
// let c : void = null;

// never 타입 (존재하지 않는, 불가능한 타입)
// 그 어떠한 값도 never 타입에는 할당이 불가능하다.
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}
