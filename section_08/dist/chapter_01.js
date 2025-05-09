// Indexed Excess Type
function printAuthorInfo1(author) {
    console.log(`${author.name} - ${author.id}`);
}
const post1 = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "동윤",
        age: 25,
        location: "어딘가",
    },
};
function printAuthorInfo2(author) {
    console.log(`${author.name} - ${author.id}`);
}
const post2 = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "동윤",
        age: 25,
        location: "어딘가",
    },
};
export {};
