// `number` 타입에만 사용할 수 있는 함수
function identityNum(arg: number): number {
  return arg;
}

// 모든 타입에 사용하기 위해 `any` 사용
function identityAny(arg: any): any {
  return arg;
}

const numAny = identityAny(10); // num이 any 타입이 됨

// 모든 타입에 사용하기 위해 제너릭 사용
function identity<T>(arg: T): T {
  return arg;
}

const num1 = identity<number>(10); // num1이 number 타입이 됨
const num2 = identity(10); // 타입을 명시하지 않아도 추론 가능

export {};
