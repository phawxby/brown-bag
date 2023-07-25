function doSomething() {
  return 2; // null | number
}

export function doSomethingElse(): number {
  const result = doSomething();

  return (result as number) * 2;
}
