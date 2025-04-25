// 타입 추론

let a = 10;
let b = "hello";
let c = {
    id: 1,
    name: "동부리",
    profile: {
        nickname: "동브리",
    },
    urls: ["www.localhost:3000"],
};

let { id, name, profile } = c;
console.log(profile);
let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
    return "hello";
}

let arr = [1, "string"];
