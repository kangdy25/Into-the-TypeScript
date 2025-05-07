// 클래스

class Student {
  // 필드
  name;
  age;
  grade;

  // 생성자
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  // 메서드
  study() {
    console.log("공부하기");
  }

  introduce() {
    console.log(`안녕하세요, 저는 ${this.name}이고, 나이는 ${this.age}살입니다.`);
  }
}

class StudentDeveloper extends Student {
  // 필드
  favoriteLanguage;

  // 생성자
  constructor(name, age, grade, favoriteLanguage) {
    super(name, age, grade);
    this.favoriteLanguage = favoriteLanguage;
  }

  code() {
    console.log(`저는 ${this.favoriteLanguage}를 좋아합니다.`);
  }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
// Student 인스턴스
let studentA = new Student("동윤", 25, "A+");
console.log(studentA);
studentA.study();
studentA.introduce();

let studentB = new StudentDeveloper("동윤", 25, "B+", "TypeScript");
console.log(studentB);
studentB.code();
studentB.study();