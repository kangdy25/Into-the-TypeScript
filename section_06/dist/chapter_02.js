// 접근 제어자 (Access Modifier)
class Employee {
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
    introduce() {
        console.log(`안녕하세요, 저는 ${this.name}이고, 나이는 ${this.age}살입니다.`);
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
    // 이건 불가능
    // func() {
    //   this.age = "앙"
    // }
    // 이건 가능 
    func() {
        this.position = "Designer";
    }
}
const employee = new Employee("동윤", 25, "developer");
// 접근 제어자가 public인 필드는 클래스 외부에서 접근할 수 있다.
employee.name = "동불";
// 접근 제어자가 private인 필드는 클래스 외부에서 접근할 수 없다.
//employee.age = 26;
// 접근 제어자가 protected인 필드는 클래스 상속 받은 클래스에서만 접근할 수 있다.
// employee.position = "designer";
console.log(employee);
export {};
