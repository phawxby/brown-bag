function doSomething() {
  return 2;
}

function doSomethingElse(): number {
  const result = doSomething();

  return (result as number) * 2;
}
