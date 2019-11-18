// 1. 제너릭을 사용해서 다음 함수의 파라미터 타입과 반환 타입을 지정하세요.
function filter<T>(arr: T[], predicate: (item: T) => boolean) {
  const result = [];
  for (const item of arr) {
    if (predicate(item)) {
      result.push(item);
    }
  }

  return result;
}

const nums = [1, 2, 3, 4, 5];
const evenNums = filter(nums, num => num % 2 === 0);

// 2. 제너릭을 사용해서 다음 함수의 파라미터 타입과 반환 타입을 지정하세요.
// (Hint: extends 키워드와 Intersection Type을 사용합니다.)
interface Level {
  score: number;
}

function addLevel<T extends Level>(obj: T) {
  let level = 1;

  if (obj.score > 90) {
    level = 3;
  } else if (obj.score > 80) {
    level = 2;
  }

  return { ...obj, level };
}

const p1 = { name: 'Kim', score: 85 };
const p2 = { id: 'NHN', score: 91 };

const p1WithLevel = addLevel(p1);
const p2WithLevel = addLevel(p2);

console.log(p1WithLevel.level); // 2
console.log(p2WithLevel.level); // 3

export {};
