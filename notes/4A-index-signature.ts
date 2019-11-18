// ## Index Signature
// - 프라퍼티에 할당되는 값들의 타입을 지정
// - `string` 과 `number`만 사용 가능
// - 객체를 HashMap(Dictionary) 용도로 사용하려고 할 때 용이함

// IndexSignature:
//  [ BindingIdentifier : string ] TypeAnnotation
//  [ BindingIdentifier : number ] TypeAnnotation

// ## 사용 예제
const p1 = {};
p1.prop2 = 'prop2';

const p2: any = {};
p2.prop = 'prop';

interface Dictionary {
  [key: string]: string;
}

const p3: Dictionary = {};
p3.prop1 = 'prop1';
p3.prop2 = 30;

p3[300] = '300';
// OK (key가 number인 경우도 같이 적용됨)

p3[300] = 30;

// ## Index Signature 사용 시 주의점
// - 모든 프라퍼티는 Index Signature 규칙을 따라야 함
interface Foo {
  [key: string]: number;
  x: number;
  y: number;
}

interface Bar {
  [key: string]: number;
  x: number;
  y: string;
}

// ## Grid 예제
interface Attribute {
  rowKey: number;
  className: string;
}

type CellValue = number | string | boolean;

interface Row {
  [key: string]: CellValue;
  __attr__: Attribute;
  // error: Property '__attr__' of type 'Attribute' is not assignable to string index type 'CellValue'
}
