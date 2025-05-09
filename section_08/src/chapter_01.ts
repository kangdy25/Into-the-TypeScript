// Indexed Excess Type

// 1. 객체
interface Post {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
        location: string;
    };
}

function printAuthorInfo1(author: Post["author"]) {
    console.log(`${author.name} - ${author.id}`);
}

const post1: Post = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "동윤",
        age: 25,
        location: "어딘가",
    },
};

// 2. 배열
type PostList = {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
        location: string;
    };
}[];

function printAuthorInfo2(author: PostList[number]["author"]) {
    console.log(`${author.name} - ${author.id}`);
}

const post2: PostList[0] = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "동윤",
        age: 25,
        location: "어딘가",
    },
};

// 3. 튜플
type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];

type TupNum = Tup[number];
