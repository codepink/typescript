import { Todo } from './todo';

export class TodoList {
  private todos: Todo[] = [];

  public addTodo(text: string) {
    this.todos.push(new Todo(text));
  }

  public print() {
    this.todos.forEach(todo => {
      todo.print();
    });
  }
}
