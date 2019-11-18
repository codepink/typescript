// # keyof 연산자
// - index type query 연산자
// - 객체 타입의 모든 프라퍼티명이 포함된 유니온 타입을 반환
interface Person {
  name: string;
  score: number;
  level: number;
}

type PersonKeys = keyof Person;

// # typeof 연산자
// - 주어진 값(value)의 타입을 반환
//   - 타입을 직접 지정하지 않고, 값을 통해 타입을 유추할 때 사용
//   - keyof 와 함께 사용하면 유용
// - 자바스크립트의 typeof 연산자와 다름
//   - 타입 문법에서만 사용 가능
//   - 실행 시점에 사용될 수 없음
const keyCodeMap = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  ESC: 27
};

type KeyCodeMap = typeof keyCodeMap;

type Keys1 = keyof KeyCodeMap;

type Keys2 = keyof typeof keyCodeMap;
