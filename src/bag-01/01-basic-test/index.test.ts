import doSomething from ".";
import { test, expect } from "vitest";

test("simple test", () => {
  expect(doSomething("foo")).toEqual("---foo---");
});
