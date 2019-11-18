// 1. 제너릭을 사용해서 범용 Dictionary 타입을 정의하세요.
// (Hint: string Dictionary)
// interface Dictionary {
//   [key: string]: string;
// }

interface Dictionary<T> {
  [key: string]: T
}

const scoreMap: Dictionary<number> = {
  player1: 40,
  player2: 60
};

const activeMap: Dictionary<boolean> = {
  player1: false,
  player2: true
};

export {};
