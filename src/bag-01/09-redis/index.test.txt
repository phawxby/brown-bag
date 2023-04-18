import { test, expect, vi } from "vitest";
import { getValue, setValue } from ".";

vi.mock("ioredis", () => vi.importActual("ioredis-mock"));

test("should get/set", async () => {
  await setValue("foo", "bar");

  expect(await getValue("foo")).toEqual("bar");
});
