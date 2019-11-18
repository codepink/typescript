// ## Null 타입 가드
// - Nullable 타입은 사용하기 전 반드시 타입 가드가 필요

function getLength(s?: string): number {
  return s.length;
}

function getLength2(s?: string): number {
  if (s) {
    return s.length;
  }
  return 0;

  // return s ? s.length : 0;
}

// ## Null 타입 단언
// - 컴파일러가 Null이 제거된 것을 이해하지 못할 때 강제로 Null을 제거
// - 변수명/프라퍼티명 뒤에 느낌표(`!`)를 붙여서 사용
// - 꼭 필요한 경우가 아니면 사용하지 말 것
function addPostFix(name: string | null): string {
  function postfix(epithet: string) {
    return `${name!.charAt(0)}.  the ${epithet}`;
  }
  name = name || 'Bob';
  return postfix('great');
}
