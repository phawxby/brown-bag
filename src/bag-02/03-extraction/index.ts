import { init } from "./someLibrary";

const options: Parameters<typeof init>[0] = {
  password: "wqdwq",
  username: "dwdwwq",
};

export async function doSomething() {
  let result: Awaited<ReturnType<typeof init>>;

  // eslint-disable-next-line no-constant-condition
  if (true) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    result = await init(options);
  }
}
