// Difference Set
type Diff<A, B> = Omit<A & B, keyof B>;
type R1 = Diff<{name : string, age: number}, {name: string, married: boolean}>;

// Symmetric Difference Set
type SymDiff<A, B> = Omit<A & B, keyof(A | B)>;
type R2 = SymDiff<{name: string, age: number}, {name: string, married: boolean}>;

// Symmetric Difference Set in Union
type SymDiffUnion<A, B> = Exclude<A | B, A & B>;
type R3 = SymDiffUnion<1 | 2 | 3, 2 | 3 | 4>;

// Subset
type IsSubset<A, B> = A extends B ? true : false;
type S1 = IsSubset<string, string | number>;
type S2 = IsSubset<{name: string, age: number}, {name: string}>;
type S3 = IsSubset<symbol, unknown>;

// Equal
type Equal<A, B> = [A] extends [B] ? [B] extends [A] ? true : false : false;

// Not Equal
type NotEqual<X, Y> = Equal<X, Y> extends true ? false : true;