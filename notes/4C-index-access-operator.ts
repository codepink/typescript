// ## 인덱스 접근 연산자 (index access operator)
// - 프라퍼티 값의 타입을 얻을 때 `Object[PropName]`의 형태로 사용할 수 있음
interface Player {
  name: string;
  score: number;
}

type PlayerName = Player['name']; // string
type PlayerScore = Player['score']; // number

// ## Generic 과 함께 사용
function getProperty<T, K extends keyof T>(obj: T, propName: K): T[K] {
  return obj[propName];
}

const player = {
  name: 'Kim',
  score: 80
};

const name = getProperty(player, 'name'); // name: string
const score = getProperty(player, 'score'); // score: number
const level = getProperty(player, 'level');

export {};
