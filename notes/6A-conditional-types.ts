// 기본 예제
type TypeNameStr<T> = T extends string ? 'string' : 'unknown';
type TypeNameNum<T> = T extends number ? 'number' : 'unknown';

type TypeName1 = TypeNameStr<'hello'>;
type TypeName2 = TypeNameStr<30>;
type TypeName3 = TypeNameNum<'hello'>;
type TypeName4 = TypeNameNum<30>;

// 중첩 예제
type TypeName<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends undefined
  ? 'undefined'
  : T extends Function
  ? 'function'
  : 'object';

type T0 = TypeName<string>; // "string"
type T1 = TypeName<'a'>; // "string"
type T2 = TypeName<true>; // "boolean"
type T3 = TypeName<() => void>; // "function"
type T4 = TypeName<string[]>; // "object"

// ## 유니온 타입, never 와 함께 사용하기
// - 유니온 타입에 조건문 사용 시 모든 타입에 적용됨 (분배 법칙)
// - 이 때 `never` 타입을 활용하면 원하지 않는 타입을 걸러낼 수 있음

// ### Diff / Filter
type Diff<T, U> = T extends U ? never : T;
type Filter<T, U> = T extends U ? T : never;

type T30 = Diff<'a' | 'b' | 'c' | 'd', 'a' | 'c' | 'f'>;

type T31 = Filter<'a' | 'b' | 'c' | 'd', 'a' | 'c' | 'f'>;

type T32 = Diff<string | number | (() => void), Function>;

type T33 = Filter<string | number | (() => void), Function>;

// ### NonNullable
type NonNullable<T> = Diff<T, null | undefined>;

type T34 = NonNullable<string | number | undefined>;

type T35 = NonNullable<string | string[] | null | undefined>;

export {};
