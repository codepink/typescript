// # Type Guard - instanceof
// - `instanceof`를 사용하면 클래스의 인스턴스인지의 여부로 타입을 제한할 수 있음
// - `instanceof` 우변은 타입이 아닌 값이어야 함 : `class`만 사용 가능

class Fish {
  swim() {}
  layEggs() {}
}

class Bird {
  fly() {}
  layEggs() {}
}

function getSmallPet(num: number): Fish | Bird {
  if (num > 0.5) {
    return new Fish();
  }
  return new Bird();
}

const pet = getSmallPet(Math.random());

if (pet instanceof Fish) {
  // 이 블록 내에서 pet의 타입은 Fish
  pet.swim();
} else {
  // 이 블록 내에서 pet의 타입은 Bird
  pet.fly();
}

export {};
