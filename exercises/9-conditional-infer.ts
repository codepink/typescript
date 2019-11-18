// 1. Parameters 타입을 참조해서 FirstParameters, RestParameters 타입을 정의하세요.
type Parameters<T> = T extends (...args: infer P) => any ? P : never;

type FirstParameter<T> = T extends (first: infer P, ...rest)

type MyFunc = (a: number, b: string, c: boolean) => void;

type MyAllParams = Parameters<MyFunc>; // [number, string, boolean];

type MyFirstParam = FirstParameter<MyFunc>; // number

type MyRestParams = RestParameters<MyFunc>; // [string, boolean]

export {};
