// Interface
interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: "동윤",
  age: 5,
  sayHi: function () {
    console.log("Hello~");
  },
};
