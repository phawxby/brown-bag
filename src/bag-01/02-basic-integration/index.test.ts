import { test, expect } from "vitest";
import { decrypt, encrypt } from ".";

test("should encrypt", () => {
  const encrypted = encrypt("foo");

  expect(encrypted).toEqual("2e2b29db4ed2cf9a392112f2b7170ee9");
});

test("should decrypt", () => {
  const decrypted = decrypt("2e2b29db4ed2cf9a392112f2b7170ee9");

  expect(decrypted).toEqual("foo");
});

test("e2e", () => {
  const encrypted = encrypt("foo");
  const decrypted = decrypt(encrypted);
  expect(decrypted).toEqual("foo");
});
