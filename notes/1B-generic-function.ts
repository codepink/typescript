// # 타입 내부에서 제너릭 사용
// - 제너릭의 용도가 한 가지 타입으로 고정됨
type IdentityFn1 = <T>(arg: T) => T;

type IdentityFn2 = {
  <T>(arg: T): T;
};

interface IdentityFn3 {
  <T>(arg: T): T;
}

function identity<T>(arg: T): T {
  return arg;
}

const identity1: IdentityFn1 = identity;
const identity2: IdentityFn2 = identity;
const identity3: IdentityFn3 = identity;

// # 타입 외부에서 제너릭 사용
// - 타입이 함수이고, 제너릭이 파라미터인 것 처럼 사용
// - 타입을 파라미터처럼 넘겨서 새로운 타입을 만들어냄

type IdentityFn4<T> = {
  (arg: T): T;
};

interface IdentityFn5<T> {
  (arg: T): T;
}

const identity4: IdentityFn4<number> = identity;
const identity5: IdentityFn5<string> = identity;

identity4('text'); // Argument of type '"text"' is not assignable to parameter of type 'number'
identity5(100); // Argument of type '100' is not assignable to parameter of type 'string'

export {};
