interface FooType {
  bar: string;
  baz: boolean;
}

const foo: FooType = {
  bar: "value a",
  baz: true,
};

function getProp<
  TObj extends object,
  TKey extends keyof TObj,
  TVal extends TObj[TKey]
>(obj: TObj, prop: TKey): TVal {
  return obj[prop] as TVal;
}

export const val = getProp(foo, "baz");
