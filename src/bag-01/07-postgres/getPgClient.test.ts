import { test, expect, beforeAll, vi } from "vitest";
import getPgClient from "./getPgClient";
import pg from "pg";

const connectSpy = vi.fn(async () => {});
const fakeClient = {
  connect: connectSpy,
};

const clientSpy = vi.spyOn(pg, "Client").mockReturnValue(fakeClient as any);

beforeAll(() => {
  process.env = {
    ...process.env,
    PG_USER: "PG-USER-ENV",
    PG_PASS: "PG-PASS-ENV",
    PG_DB: "PG-DB-ENV",
    PG_HOST: "PG-HOST-ENV",
    PG_PORT: "12345",
  };
});

test("get client", async () => {
  const client = await getPgClient();

  expect(client).toEqual(fakeClient);
  expect(connectSpy).toHaveBeenCalledTimes(1);
  expect(clientSpy).toHaveBeenCalledWith({
    user: "PG-USER-ENV",
    password: "PG-PASS-ENV",
    database: "PG-DB-ENV",
    host: "PG-HOST-ENV",
    port: 12345,
  });
});
