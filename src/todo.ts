export class Todo {
  private static lastId = 0;
  private id: number;
  private text: string;
  private completed: boolean = false;

  constructor(text: string) {
    this.id = ++Todo.lastId;
    this.text = text;
  }

  print() {
    console.log(`- [${this.completed ? 'X' : ' '}] ${this.text}`);
  }
}
