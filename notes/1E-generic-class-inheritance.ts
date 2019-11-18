// # 클래스를 인자로 받는 함수
function create<T>(C: { new (): T }): T {
  return new C();
}

class HasName {
  name = '';
}

class HasAge {
  age = 0;
}

const hasName = create(HasName);
console.log(hasName.name);
console.log(hasName.age); // Property 'age' does not exist on type 'HasName'

const hasAge = create(HasAge);
console.log(hasAge.name); // Property 'name' does not exist on type 'HasAge'
console.log(hasAge.age);

// # 클래스를 인자로 받는 함수 - 상속 사용
class BeeKeeper {
  hasMask = false;
}

class ZooKeeper {
  nametag = '';
}

class Animal {
  numLegs = 0;
}

class Bee extends Animal {
  keeper = new BeeKeeper();
}

class Lion extends Animal {
  keeper = new ZooKeeper();
}

class Book {
  name = '';
}

function createInstance<A extends Animal>(C: new () => A): A {
  return new C();
}

const c1 = createInstance(Lion).keeper.nametag;
const c2 = createInstance(Bee).keeper.hasMask;
const c3 = createInstance(Animal).keeper;
const c4 = createInstance(Book);

export {};
