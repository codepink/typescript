// - `infer` 키워드를 사용하면 유추된 타입을 변수처럼 사용 가능
// - `extends` 내부에서만 사용 가능

// ### 기본 예제
type ArrayType<T> = T extends (infer U)[] ? U : T;
type ArrType1 = ArrayType<string[]>;
type ArrType2 = ArrayType<number[]>;

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
type RetType1 = ReturnType<() => number>;
type RetType2 = ReturnType<() => string>;

// ### 중첩 예제
type Unpacked<T> = T extends (infer U)[]
  ? U
  : T extends (...args: any[]) => infer U
  ? U
  : T extends Promise<infer U>
  ? U
  : T;

type T0 = Unpacked<string>; // string
type T1 = Unpacked<string[]>; // string
type T2 = Unpacked<() => string>; // string
type T3 = Unpacked<Promise<string>>; // string
type T4 = Unpacked<Promise<string>[]>; // Promise<string>
type T5 = Unpacked<Unpacked<Promise<string>[]>>; // string

// ### 심화 예제
type Parameters<T> = T extends (...args: infer P) => any ? P : never;

type Param1 = Parameters<(x: number, y: number) => number>;
type Param2 = Parameters<(s: string) => void>;
type Param3 = Parameters<() => void>;
type Param4 = Parameters<string>;

export {};
