// 선언 합침 (모듈 보강 시, 주로 사용한다.)

interface Person {
  name: string;
}

interface Person {
  age: number;
}

const person: Person = {
  name: "나",
  age: 25,
};
