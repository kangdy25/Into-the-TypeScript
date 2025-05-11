// Exclude<T, U>

type Exclude<T, U> = T extends U ? never : T;
// 1단계
// Exclude<string, boolean> |
// Exclude<boolean, boolean> |

// 2단계
// string |
// never

// 3단계
// string

type A = Exclude<string | boolean, boolean>;

// Extract<T, U>
type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | boolean, boolean>;

// ReturnType
type ReturnType<T extends (...args: any) => any> = T extends (
    ...agrs: any
) => infer R
    ? R
    : never;

function funcA() {
    return "hello";
}

function funcB() {
    return 30;
}

type ReturnA = ReturnType<typeof funcA>;
type ReturnB = ReturnType<typeof funcB>;
