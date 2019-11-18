// ## 다른 타입으로 프라퍼티명 지정하기
// - `in` 키워드와 문자열 리터럴 타입을 사용해서 프라퍼티명을 제한할 수 있음
// - type alias 로만 사용 가능 (interface 사용 불가)

type Keys = 'firstName' | 'lastName';
type Name = { [k in Keys]: string };

const validName: Name = {
  firstName: 'Jang',
  lastName: 'Kim'
};

const invalidName: Name = {
  lastName: 'Kim',
  nickName: 'Genius'
};

// interface Name2 {
//   [k in Keys]: string;
// }

// ## 프라퍼티 속성 추가하기
// - `?`나 `readonly` 등의 속성을 추가할 수 있음
// - 인덱스 접근 연산자, `keyof`, `in`를 동시에 사용

// ### 타입을 직접 정의하는 경우
interface Person {
  name: string;
  age: number;
}

interface PersonPartial {
  name?: string;
  age?: number;
}

interface PersonReadonly {
  readonly name: string;
  readonly age: number;
}

// ### Mapped Type 사용 시
type PersonPartial2 = {
  [P in keyof Person]?: Person[P];
};

type PersonReadonly2 = {
  readonly [P in keyof Person]: Person[P];
};

export {};
