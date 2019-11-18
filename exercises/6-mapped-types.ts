// 1. Side 타입과 in 키워드를 사용해서 Padding 타입을 정의하세요.
type Side = 'top' | 'left' | 'right' | 'bottom';

type Padding = {
  [k in Side]: number;
}

const padding: Padding = {
  top: 20,
  left: 40,
  right: 40,
  bottom: 10
};

// 2. keyof, typeof, in 키워드를 사용해서
// styleMap과 동일한 프라퍼티를 갖지만 boolean 타입의 값을 갖는 객체 타입을 정의하세요.
const styleMap = {
  color: 'red',
  align: 'center',
  padding: 20,
  margin: 30
};

type StyleMap = typeof styleMap;
type StyleFlagMap = {
  [K in keyof StyleMap]: boolean
};

const styleFlagMap: StyleFlagMap = {
  color: true,
  align: false,
  padding: true,
  margin: false
};

export {};
