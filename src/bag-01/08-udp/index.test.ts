import { test, expect, beforeAll, vi, afterAll } from "vitest";
import { startServer, stopServer } from ".";
import { AddressInfo } from "net";
import getPort from "get-port";
import udp from "dgram";

let address: AddressInfo;

beforeAll(async () => {
  const port = await getPort();

  address = await startServer(port);
});

afterAll(async () => {
  await stopServer();
});

test("should start server", () => {
  expect(address).toBeTruthy();
});

test("should respond", async () => {
  const result = await new Promise((resolve, reject) => {
    const client = udp.createSocket("udp4");

    try {
      client.on("message", (msg) => {
        resolve(msg.toString("utf-8"));
      });

      client.on("error", (err) => {
        reject(err);
      });

      client.send(
        Buffer.from("Paul"),
        address.port,
        address.address,
        (err, bytes) => {
          if (err) {
            reject(err);
          }
        }
      );
    } catch (err) {
      client.close();
    }
  });

  expect(result).toMatchInlineSnapshot('"Hello Paul"');
});
