function doSomething() {
  return 2; // null | number
}

function doSomethingElse(): number {
  const result = doSomething();

  return (result as number) * 2;
}
