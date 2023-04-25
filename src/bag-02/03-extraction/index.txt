import { init } from "./someLibrary";

const options: Parameters<typeof init>[0] = {
  password: "wqdwq",
  username: "dwdwwq",
};

async function doSomething() {
  let result: Awaited<ReturnType<typeof init>>;

  if (true) {
    result = await init(options);
  }
}
