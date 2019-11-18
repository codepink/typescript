// 1. Diff 타입과 keyof를 사용해서 DiffKeys 타입을 정의해주세요.
type Diff<T, U> = T extends U ? never : T;

interface Dog {
  run(): void;
  bark(): void;
  eat(): void;
  sleep(): void;
}

interface Bird {
  fly(): void;
  eat(): void;
  sleep(): void;
}

type DogKeysOnly = DiffKeys<Dog, Bird>; // "run" | "bark"

type DiffKeys<T, U> = Diff<keyof T, keyof U>;

// 2. SameObject와 CustomValueOf, CustomKeyOf를 참고해서
// 주어진 객체에서 값이 number 타입인 프라퍼티명을 반환하는 NumberKeys 타입을 정의하세요.
type Player = {
  name: string;
  score: number;
  level: number;
};

type SameObject<T> = {
  [K in keyof T]: T[K];
};

type CustomValueOf<T> = {
  [K in keyof T]: T[K];
}[keyof T];

type CustomKeyOf<T> = {
  [K in keyof T]: K;
}[keyof T];

type PlayerObject = SameObject<Player>;
type PlayerValues = CustomValueOf<Player>;
type PlayerKeys = CustomKeyOf<Player>;

type NumberKeys<T> = {
  [K in keyof T]: T[K] extends number ? K : never;
}[keyof T];

type PlayerNumKeys = NumberKeys<Player>; // 'score' | 'level'

export {};
