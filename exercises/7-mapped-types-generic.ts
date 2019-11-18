// 1. Nullable 타입을 정의하세요.
interface Player {
  name: string;
  score: number;
}

type Nullable<T> = {
  [P in keyof T]: T[P] | null | undefined;
}

type NullablePerson = Nullable<Player>;

const p1: NullablePerson = {
  name: null,
  score: null
};

// 2. PickProps 타입을 정의하세요.
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  phone: string;
  address: string;
}

type PickProps<T, K extends keyof T> = {
  [P in K]: T[P];
};

type PersonName = PickProps<Person, 'firstName' | 'lastName'>;

const name: PersonName = {
  firstName: 'Sam',
  lastName: 'Kim'
};

export {};
