import { test, expect, vi, beforeAll, afterAll } from "vitest";
import { webService } from ".";
import { rest } from "msw";
import { setupServer } from "msw/node";

const valFn = vi.fn();

const worker = setupServer(
  rest.post(
    "https://api.myenergi.com/v1/banana-boat",
    async (req, res, ctx) => {
      const { val } = await req.json();
      valFn(val);

      return res(
        ctx.json({
          val: "bar",
        })
      );
    }
  )
);

beforeAll(() => {
  worker.listen();
});

afterAll(() => {
  worker.close();
});

test("web service", async () => {
  const p = await webService("foo");

  expect(p.val).toEqual("bar");
  expect(valFn).toHaveBeenCalledWith("foo");
});
