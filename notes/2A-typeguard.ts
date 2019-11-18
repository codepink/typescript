// # Type Guard란?
// - Union 타입 사용 시 컴파일러는 정확히 어떤 타입인지를 예측할 수 없음
// - if / switch 등의 조건문을 사용해서 타입을 구체적으로 제한해야 함
interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

function getSmallPet(num: number): Fish | Bird {
  if (num > 0.5) {
    return {
      fly() {},
      layEggs() {}
    };
  }
  return {
    swim() {},
    layEggs() {}
  };
}

const pet = getSmallPet(Math.random()); // pet의 타입은 Fish | Bird
pet.layEggs(); // Fish와 Bird 모두 layEggs()가 있으므로 가능
pet.swim(); // Bird에는 swim()이 없으므로 에러 발생

// 하지만 컴파일러는 사용자가 작성한 코드를 분석해서 타입을 유추하기 어려움
if (pet.swim) {
  pet.swim();
} else if (pet.fly) {
  pet.fly();
}

// 이를 해결하기 위해서는 타입 단언(assertion)을 사용해야 함
if ((pet as Fish).swim) {
  (pet as Fish).swim();
} else if ((pet as Bird).fly) {
  (pet as Bird).fly();
}

// 컴파일러가 이해할 수 있도록 타입을 제한해주는 코드가 필요 -> 타입 가드

// in 연산자
// - `in` 연산자를 사용하면 해당 속성의 존재 여부로 타입가 적용됨
// - [2.7 버전부터 지원]
if ('swim' in pet) {
  pet.swim();
} else {
  pet.fly();
}

// # 사용자 정의 Type Guard
// - 함수의 리턴 타입을 `x is Y`로 정의하면 타입 가드 사용 가능
// - `x`: 파라미터 명
// - `Y`: 타입명
function isFish(target: Fish | Bird): target is Fish {
  return 'swim' in target;
}

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

export {};
