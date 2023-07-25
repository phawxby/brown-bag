interface FooType extends Object {
  bar: string;
  baz: boolean;
}

const foo: FooType = {
  bar: "value a",
  baz: true,
};

function getProp<
  TObj extends Object,
  TKey extends keyof TObj,
  TVal extends TObj[TKey]
>(obj: TObj, prop: TKey): TVal {
  return obj[prop] as TVal;
}

const val = getProp(foo, "baz");
