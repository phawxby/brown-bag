import { init } from "./someLibrary";

function doSomething() {
  let result: any;

  if (true) {
    result = init({
      username: "foo",
      password: "bar",
    });
  }
}
