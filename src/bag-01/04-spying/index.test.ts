import { test, expect, vi } from "vitest";
import { callConsole } from ".";

const logSpy = vi.spyOn(console, "log").mockReturnValue(undefined);

test("spying", () => {
  callConsole("foo");

  expect(logSpy).toHaveBeenCalledTimes(1);
  expect(logSpy).toHaveBeenCalledWith("foo");
});
