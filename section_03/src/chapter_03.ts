// Unknown 타입 (전체집합)
function unknownExam() {
    // 업캐스팅
    let a: unknown = 1;
    let b: unknown = "hello";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    let unknownVar: unknown;

    // 다운캐스팅 (오류)
    // let num: number = unknownVar;
    // let string: string = unknownVar;
    // let bool: boolean = unknownVar;
}

// Never 타입 (공집합)
function neverExam() {
    function neverFunc(): never {
        while (true) {}
    }

    // 업캐스팅
    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    // 다운캐스팅 (오류)
    // let never1: never = 10;
    // let never2: never = "string";
    // let never3: never = true;
}

// Void 타입
function voidExam() {
    function voidFunc(): void {
        console.log("hi");
    }

    // 업캐스팅
    let voidVar: void = undefined;
}

// Any 타입 (모든 업캐스팅과 다운캐스팅을 무시)
function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar;
    undefinedVar = anyVar;

    // never 타입은 공집합이기에 할당 불가
    // neverVar = anyVar;
}
