// 타입스크립트의 클래스
class Employee {
    // 필드
    name;
    age;
    position;
    // 생성자
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    // 메서드
    work() {
        console.log("일하기");
    }
}
class Executive extends Employee {
    // 필드
    officeNumber;
    // 생성자
    constructor(name, age, position, officeNumber) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
    // 메서드
    work() {
        console.log("난 일 안한다");
    }
}
const employeeA = new Employee("동윤", 25, "developer");
console.log(employeeA);
const employeeB = {
    name: "다비지",
    age: 25,
    position: "engineer",
    work() {
        console.log("일하는 척하면서 마크 서버 열기");
    }
};
export {};
