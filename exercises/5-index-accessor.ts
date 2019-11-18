// 1. 다음 함수의 파라미터 타입과 반환 타입을 작성하세요.
// (Hint: extends, keyof, index 접근자 사용)


function mapProp<T, K extends keyof T>(propName: K, arr: T[]) {
  return arr.map(item => item[propName]);
}

interface Todo {
  title: string;
  completed: boolean;
}

const todos: Todo[] = [
  { title: 'Sing', completed: false },
  { title: 'Dance', completed: false },
  { title: 'Run', completed: false }
];

const titles = mapProp('title', todos);
console.log(titles); // ['Sing', 'Dance', 'Run']




// 2. 다음 함수의 파라미터 타입과 반환 타입을 작성하세요.
// (Hint: extends, keyof, index 접근자 사용)
function findProp<T, K extends keyof T>(propName: K, value: T[K], arr: T[]) {
  return arr.find(item => item[propName] === value);
}

const singTodo = findProp('title', 'Sing', todos);

if (singTodo) {
  console.log(singTodo.title); // 'Sing'
}

// 3. keyof, typeof, index 접근자 를 사용해서 다음 함수의 타입을 정의하세요.
const styleMap = {
  color: 'red',
  align: 'center',
  padding: 20,
  marginTop: 30
};

type styleMap = typeof styleMap;
function changeStyle<K extends keyof styleMap>(propName: K, value: styleMap[K]) {
  styleMap[propName] = value;
}

changeStyle('col'); // error (프라퍼티명 에러)
changeStyle('color', 12); // error (프라퍼티 타입 에러)
changeStyle('padding', 30); // OK

export {};
