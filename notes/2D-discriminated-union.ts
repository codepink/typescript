// # Discriminated Union
// - 구분된(구별 가능한) 유니온 타입
// - Tagged Union / Variant Record, Sum Type(ADT)과 유사한 의미
// - 타입 구분을 위한 특정 필드를 갖는다 (예: Redux의 Action)
// - 해당 필드를 사용해서 타입 가드를 적용한다.

interface Square {
  type: 'square';
  size: number;
}

interface Rectangle {
  type: 'rectangle';
  width: number;
  height: number;
}

interface Circle {
  type: 'circle';
  radius: number;
}

type Shape = Square | Rectangle | Circle;

function area(s: Shape): number {
  switch (s.type) {
    case 'square':
      return s.size * s.size;
    case 'rectangle':
      return s.height * s.width;
    case 'circle':
      return Math.PI * s.radius ** 2;
  }
  return 0;
}
