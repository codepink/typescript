// # 파라미터
function f(x: number, y?: number) {
  return x + (y || 0);
}

f(1, 2);
f(1);
f(1, undefined);
f(1, null);

// # 프라퍼티
class C {
  public a = 10;
  public b?: number;
}

let c = new C();
c.a = undefined;
c.b = 13;
c.b = undefined;
c.b = null;

export {};
