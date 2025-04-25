// 서로소 유니온 타입 (교집합 없는 타입으로 만든 유니온 타입)

type Admin = {
    tag: "ADMIN";
    name: string;
    kickCount: number;
};

type Member = {
    tag: "MEMBER";
    name: string;
    point: number;
};

type Guest = {
    tag: "GUEST";
    name: string;
    visitCount: number;
};

type User = Admin | Member | Guest;

function Login(user: User) {
    switch (user.tag) {
        case "ADMIN": {
            console.log(`${user.name}님이 현재 ${user.kickCount}명 강퇴함`);
            break;
        }
        case "MEMBER": {
            console.log(`${user.name}님이 현재 ${user.point}점 모음`);
            break;
        }
        case "GUEST": {
            console.log(`${user.name}님이 현재 ${user.visitCount}번 방문함`);
            break;
        }
    }
}

// #############################################
type LoadingTask = {
    state: "LOADING";
};

type FailedTask = {
    state: "FAILED";
    error: {
        message: string;
    };
};

type SuccessTask = {
    state: "SUCCESS";
    response: {
        data: string;
    };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

function processResult(task: AsyncTask) {
    switch (task.state) {
        case "LOADING": {
            console.log("로딩 중");
            break;
        }
        case "FAILED": {
            console.log(`에러 발생: ${task.error.message}`);
            break;
        }
        case "SUCCESS": {
            console.log(`성공: ${task.response.data}`);
            break;
        }
    }
}

const loading: AsyncTask = {
    state: "LOADING",
};

const failed: AsyncTask = {
    state: "FAILED",
    error: {
        message: "오류 발생 원인~",
    },
};

const success: AsyncTask = {
    state: "SUCCESS",
    response: {
        data: "데이터~",
    },
};
