// 제네릭 인터페이스
let keyPair = {
    key: "Key",
    value: 0,
};
let keyPair2 = {
    key: true,
    value: ["1", "2"],
};
let numberMap1 = {
    key: -1231,
    key2: 134234,
};
let stringMap = {
    key: "value",
};
let booleanMap = {
    key: true,
};
let stringMap2 = {
    key: "hello",
};
function goToSchool(user) {
    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);
}
const developerUser = {
    name: "동불이",
    profile: {
        type: "developer",
        skill: "TypeScript",
    },
};
const studentUser = {
    name: "동윤",
    profile: {
        type: "student",
        school: "가천대학교",
    },
};
export {};
