// 1. 다음 함수의 타입 에러를 if/else 문을 사용해서 해결하세요.
// (Hint: str이 없는 경우 빈 문자열을 반환합니다.)
function getFirstChar(str?: string): string {
  return (str || '').charAt(0);
}

// 2. 다음 render 함수의 타입 에러를 `!`를 사용해서 해결하세요.
// (Hint: render 시점에 this.el 이 항상 존재한다고 가정한다.)
class Component {
  private el?: HTMLElement;

  public onMount(el: HTMLElement) {
    this.el = el;
  }

  public render() {
    this.el!.innerHTML = '<div>Hello</div>';
  }
}

export {};
