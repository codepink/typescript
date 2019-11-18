// `null`이나 `undefined`를 타입에 명시한 경우에만 할당할 수 있음
let name1: string | null = null;
let name2: string = null;

let score1: number | undefined;
let score2: number = undefined;

// - `let` 변수 선언 시 초기값이 없는 것은 허용 / 초기화 전 사용은 불가능
// 초기값이 없는 상태는 허용
let point: number;

// 초기화하기 전에는 사용 불가
console(point);

// - `null`과 `undefined`는 엄격하게 구분
let name3: string | undefined = null;
let score3: number | null = undefined;
