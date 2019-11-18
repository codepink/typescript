// 다음 reducer 함수를 위해 Action 타입을 정의하세요.
// (Hint: Descriminated Union을 사용하세요)
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

type State = Todo[];

interface AddTodo {
  type: 'ADD_TODO',
  text: string
}

interface RemoveTodo {
  type: 'REMOVE_TODO',
  id: number
}

interface ChangeTodo {
  type: 'CHANGE_TODO',
  id: number,
  text: string
}

type Action = AddTodo | RemoveTodo | ChangeTodo;

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: state[state.length - 1].id + 1,
          text: action.text,
          completed: false
        }
      ];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id === action.id);
    case 'CHANGE_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            text: action.text
          };
        }
        return todo;
      });
    default:
      return state;
  }
}

export {};
