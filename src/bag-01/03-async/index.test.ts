import { test, expect, vi } from "vitest";
import { asyncStuff } from ".";

vi.useFakeTimers();

test("async", async () => {
  const p = asyncStuff("foo");

  expect(p).toBeInstanceOf(Promise);

  await vi.advanceTimersByTime(60000);

  await expect(p).resolves.toEqual("foo");
});
