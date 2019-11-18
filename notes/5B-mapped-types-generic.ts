// ## Generic을 활용한 Mapped Type
interface Person {
  name: string;
  age: number;
}

type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type PartialPerson = Partial<Person>;
type ReadonlyPerson = Readonly<Person>;
type PartialReadonlyPerson = Partial<Readonly<Person>>;

type PartialReadonly<T> = {
  readonly [P in keyof T]?: T[P];
};

type PartialReadonlyPerson2 = PartialReadonly<Person>;

// ## 프라퍼티 속성 빼기
// - `-`를 사용해서 `readonly`와 `?` 속성을 제거할 수 있음
// - `+`은 부호를 붙이지 않을 때와 동일 (기본값)
type Required<T> = {
  [P in keyof T]-?: T[P];
};

type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

type RequiredPerson = Required<PartialPerson>;
type MutablePerson = Mutable<ReadonlyPerson>;
type MutableRequiredPerson = Mutable<Required<PartialReadonlyPerson>>;

type MutableRequired<T> = {
  -readonly [P in keyof T]-?: T[P];
};

type MutableRequiredPerson2 = MutableRequired<PartialReadonlyPerson>;

export {};
