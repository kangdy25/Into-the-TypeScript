// Array (배열)
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["a", "b", "c"];
let boolArr1: boolean[] = [true, false];
let boolArr2: Array<Boolean> = [true, false];

// 다양한 타입의 Array
let multiArr: (number | string)[] = [1, "a", "b"];

// 다차원 Array
let dimensionArr: number[][] = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

// Tuple (길이와 타입이 고정된 배열)
let tuple1: [number, number] = [1, 2];
let tuple2: [number, string, boolean] = [1, "str", true];
