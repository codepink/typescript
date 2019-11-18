function loggingIdentityBad<T>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// # extends 문법 사용해서 타입 제한하기
interface Lengthwise {
  length: number;
}

// T가 Lengthwise 타입임을 명시
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

loggingIdentity('Hello');
loggingIdentity([1, 2, 3, 4]);
loggingIdentity({ length: 10, value: 3 });
loggingIdentity(3);

export {};
