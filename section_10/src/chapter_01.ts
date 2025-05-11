// Partial<T>

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}

type Partial<T> = {
    [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
    title: "string",
    content: "string",
};

// Required<T>
type Required<T> = {
    [key in keyof T]-?: T[key];
};

const withThumbnialPost: Required<Post> = {
    title: "string",
    tags: ["ts"],
    content: "string",
    thumbnailURL: "",
};

// Readonly<T>

type Readonly<T> = {
    readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
    title: "보호된 게시글",
    tags: [],
    content: "",
};
