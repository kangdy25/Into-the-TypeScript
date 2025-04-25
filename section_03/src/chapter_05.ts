// 타입 단언

type Person = {
    name: string;
    age: number;
};

let person = {} as Person;
person.name = "동불이";
person.age = 25;

type Dog = {
    name: string;
    color: string;
};

let dog = {
    name: "멍",
    color: "black",
    breed: "시바",
} as Dog;

// 타입 단언의 규칙
// 값 as 단언 <- 단언식
// A as B => A가 B의 슈퍼타입이거나, A가 B의 서브타입이어야 한다.

// 가능
let num1 = 10 as never;
let num2 = 10 as unknown;

// 불가능
// let num3 = 10 as string;

// 근데 이건 가능 (그치만 절대 쓰지말자;;)
let num3 = 10 as unknown as string;

//  const 단언
let num4 = 10 as const;

let cat = {
    name: "냥",
    color: "white",
} as const;

// 이렇게 되면 객체 프로퍼티 수정 불가
// cat.name = "";

// Non Null 단언
type Post = {
    title: string;
    author?: string;
};

let post: Post = {
    title: "ㅈㄱㄴ",
    author: "익1",
};

const len: number = post.author!.length;
