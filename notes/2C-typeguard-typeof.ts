// - `typeof로 number, string, boolean, symbol 타입을 찾을 때 타입 가드가 됨
// - 원시 타입에만 사용 가능

function getLast(value: number | string | any[]) {
  if (typeof value === 'number') {
    return value % 10;
    // return value[value.length - 1]; // ERROR
  }
  if (typeof value === 'string') {
    return value.charAt(value.length - 1);
    // return value % 10; // ERROR
  }
  return value[value.length - 1];
}

export {};
