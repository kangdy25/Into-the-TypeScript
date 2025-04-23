// enum 타입 (여러가지 값들에 각각 이름을 부여하여 열거해두고 사용한다.)
var Role;
(function (Role) {
    Role[Role["CAPTAIN"] = 0] = "CAPTAIN";
    Role[Role["SUBCAPTAIN"] = 1] = "SUBCAPTAIN";
    Role[Role["PLAYER"] = 2] = "PLAYER";
    Role[Role["PATIENT"] = 3] = "PATIENT";
})(Role || (Role = {}));
let player1 = {
    name: "Enzo",
    role: Role.CAPTAIN, // 주장
};
let player2 = {
    name: "Caicedo",
    role: Role.SUBCAPTAIN, // 부주장
};
let player3 = {
    name: "Palmer",
    role: Role.PLAYER, // 일반 플레이어
};
let player4 = {
    name: "James",
    role: Role.PATIENT, // 환자
};
console.log(player1, player2, player3, player4);
export {};
