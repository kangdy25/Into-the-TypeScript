// isNever

// T가 유니언이면 분산됨. 하지만 T = never이면 분산도 안 되고 평가도 안 됨
// 따라서 튜플로 만들어 분산을 방지해야 함
type IsNever<T> = [T] extends [never] ? true: false;

let neverA : IsNever<never> // true
let neverB : IsNever<string> // false
let neverC : IsNever<never | string> // false

// isAny

// any와 교차(&) 또는 합집합(|)을 하면 결과는 무조건 any가 된다
// 모든 타입은 any로 확장(extends)하면 참이 된다.
type IsAny<T> = string extends (number & T) ? true : false;

let anyA : IsAny<any> // true
let anyB : IsAny<string> // false
let anyC : IsAny<number | string> // false

// isArray

// 1. IsArray<never>가 never이 되는 것을 방지해야 함
// 2. IsArray<any>가 boolean이 되는 것을 방지해야 함
// 3. IsArray<readonly []>가 false가 되는 것을 방지해야 함

type IsArray<T> = IsNever<T> extends true 
    ? false
    : IsAny<T> extends true
        ? false
        : T extends readonly unknown[]
            ? true
            : false

let arrA : IsArray<string[]>
let arrB : IsArray<number>
let arrC : IsArray<never>
let arrD : IsArray<readonly string[]>
let arrE : IsArray<any>

// isTuple

// 1. 배열 검사 때처럼 IsArray<never>가 never이 되는 것을 방지해야 함
// 2. 배열 검사 때처럼 IsArray<readonly []>가 false가 되는 것을 방지해야 함
// 3. 배열 검사와 달리 any인지 검사할 필요는 없음

// 튜플과 배열의 핵심 차이 (number extends T["length"] ? false : true)
// T['length']이 일반적인 number라면 (= 배열), false
// T['length']이 리터럴 숫자라면 (= 튜플), true"
// 이때 "length"는 단순 문자열이 아닌 타입 수준에서 속성(프로퍼티) 이름이다.

type IsTuple<T> = IsNever<T> extends true
    ? false
    : T extends readonly unknown[]
        ? number extends T["length"]
            ? false 
            : true
        : false;

type tupleA = IsTuple<[number, string]>;
type tupleB = IsTuple<number[]>;
type tupleC = IsTuple<readonly [1, 2]>; 
type tupleD = IsTuple<readonly number[]>;
type tupleE = IsTuple<never>;     
type tupleF = IsTuple<any>;

// isUnion

// 1. T extends T는 항상 참이지만 사용하는 이유는
//    => T가 유니언 타입일 때 분산(distribution)을 발생시키기 위함이다.
// 2. U = T는 T에 대한 백업본이다.
// 3. ["string" | "number"] | ["number"]은 false, ["string" | "number"] | ["string"]도 false
//    => 따라서 전체 false

type IsUnion<T, U = T> = IsNever<T> extends true
    ? false
    : T extends T
        ? [U] extends [T]
            ? false
            : true
        : false