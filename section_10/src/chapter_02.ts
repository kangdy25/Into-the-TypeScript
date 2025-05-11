// Pick<T, K>

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}

type Pick<T, K extends keyof T> = {
    [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
    title: "옛날 글",
    content: "옛날 컨텐츠",
};

// Omit<T, K>

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

const noTitlePost: Omit<Post, "title"> = {
    content: "옛날 컨텐츠",
    tags: [],
    thumbnailURL: "",
};

// Record<K, V>
type Record<K extends keyof any, V> = {
    [key in K]: V;
};

type Thumbnail = Record<
    "large" | "medium" | "small",
    { url: string; size: number }
>;
