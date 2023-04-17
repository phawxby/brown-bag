import { test, expect, vi } from "vitest";
import { callConsoleThroughLib } from ".";
import { log, warn, error } from "./logging";

vi.mock("./logging", () => {
  return {
    log: vi.fn(),
    warn: vi.fn(),
    error: vi.fn(),
  };
});

const logSpy = vi.mocked(log);
const warnSpy = vi.mocked(warn);
const errorSpy = vi.mocked(error);

test("mocking", () => {
  callConsoleThroughLib("foo");

  expect(logSpy).toHaveBeenCalledTimes(1);
  expect(warnSpy).toHaveBeenCalledTimes(1);
  expect(errorSpy).toHaveBeenCalledTimes(1);
});
