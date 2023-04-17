export function asyncStuff(val: string) {
  return new Promise((resolve) => {
    const to = setTimeout(() => {
      resolve(val);
    }, 60000);
    to.ref();
  });
}
