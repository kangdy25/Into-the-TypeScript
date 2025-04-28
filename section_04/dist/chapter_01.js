// Unknown 타입 (전체집합)
function unknownExam() {
    // 업캐스팅
    let a = 1;
    let b = "hello";
    let c = true;
    let d = null;
    let e = undefined;
    let unknownVar;
    // 다운캐스팅 (오류)
    // let num: number = unknownVar;
    // let string: string = unknownVar;
    // let bool: boolean = unknownVar;
}
// Never 타입 (공집합)
function neverExam() {
    function neverFunc() {
        while (true) { }
    }
    // 업캐스팅
    let num = neverFunc();
    let str = neverFunc();
    let bool = neverFunc();
    // 다운캐스팅 (오류)
    // let never1: never = 10;
    // let never2: never = "string";
    // let never3: never = true;
}
// Void 타입
function voidExam() {
    function voidFunc() {
        console.log("hi");
    }
    // 업캐스팅
    let voidVar = undefined;
}
// Any 타입 (모든 업캐스팅과 다운캐스팅을 무시)
function anyExam() {
    let unknownVar;
    let anyVar;
    let undefinedVar;
    let neverVar;
    anyVar = unknownVar;
    undefinedVar = anyVar;
    // never 타입은 공집합이기에 할당 불가
    // neverVar = anyVar;
}
export {};
