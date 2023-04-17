import { test, expect, beforeAll, vi } from "vitest";
import * as getPgClient from "./getPgClient";
import { getEmails } from ".";

const mockClient = {
  query: vi.fn(),
};

const getPgClientSpy = vi
  .spyOn(getPgClient, "default")
  .mockResolvedValue(mockClient as any);

test("get emails", async () => {
  mockClient.query.mockResolvedValue({
    rows: [
      {
        guid: "4oir983jr932jd",
        username: "foo",
        email: "foo@myenergi.com",
      },
      {
        guid: "0rj90mr0932r23",
        username: "bar",
        email: "bar@myenergi.com",
      },
      {
        guid: "g98jf3498f9034",
        username: "baz",
        email: "baz@myenergi.com",
      },
    ],
  });

  const result = await getEmails();

  expect(result.size).toEqual(3);
  expect(Array.from(result)).toEqual([
    "foo@myenergi.com",
    "bar@myenergi.com",
    "baz@myenergi.com",
  ]);
});
