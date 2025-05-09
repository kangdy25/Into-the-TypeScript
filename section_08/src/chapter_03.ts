// 맵드 타입

interface User {
    id: number;
    name: string;
    age: number;
}

type PartialUser = {
    [key in "id" | "name" | "age"]?: User[key];
};

type booleanUser = {
    [key in keyof User]: boolean;
};

type readonlyUser = {
    readonly [key in keyof User]: User[key];
};

// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): readonlyUser {
    // ... 기능
    return {
        id: 1,
        name: "동불이",
        age: 25,
    };
}

function updateUser(user: PartialUser) {
    // ... 수정하는 기능
}

updateUser({
    // id: 1,
    // name: "동불이",
    age: 26,
});
