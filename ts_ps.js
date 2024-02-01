/////////////// Basic Type ///////////////
// Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다. 
var myName = '동불이';
var myAge = 24;
var ImFrom = 'Busan';
// Q2. 여러분이 가장 좋아하는 곡과 가수 이름을 변수에 object 자료형으로 담아보십시오.
var song = { title: '주를 더욱 사랑', singer: '예수전도단' };
// Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
/////////////// Union / Any / Unknown Type ///////////////
// Q1. 다음 변수 4개에 타입을 지정해봅시다.
var user = 'kim';
var age = undefined;
var married = false;
var chulsoo = [user, age, married];
// Q2. 학교라는 변수에 타입 지정해보십시오.
var school = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
school.score[4] = false;
school.friend = ['Lee', school.teacher];
