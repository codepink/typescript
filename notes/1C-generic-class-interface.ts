// 제너릭 클래스
class Box<T> {
  private contents: T;

  constructor(value: T) {
    this.contents = value;
  }

  getValue() {
    return this.contents;
  }
}

const sbox = new Box<string>('Hello');
const str: string = sbox.getValue();

const nbox = new Box<number>(10);
const num: number = nbox.getValue();

// 제너릭 인터페이스 (객체 타입 리터럴)
interface GenericAdder1<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

type GenericAdder2<T> = {
  zeroValue: T;
  add: (x: T, y: T) => T;
};

const num2: GenericAdder1<number> = {
  zeroValue: 0,
  add: (x, y) => x + y
};

const num3: GenericAdder2<string> = {
  zeroValue: '',
  add: (x, y) => x + y
};

export {};
