import udp from "dgram";
import { AddressInfo } from "net";

let server: udp.Socket | undefined;

export async function startServer(port: number): Promise<AddressInfo> {
  return new Promise((resolve, reject) => {
    if (!server) {
      server = udp.createSocket("udp4");

      server.on("listening", () => {
        if (server) {
          resolve(server.address());
        } else {
          reject(new Error("Server is undefined"));
        }
      });

      server.on("close", () => {});

      server.on("error", (err) => {
        reject(err);
      });

      server.on("message", (msg, info) => {
        server?.send(`Hello ${msg.toString("utf-8")}`, info.port);
      });

      server.bind(port);
    } else {
      resolve(server.address());
    }
  });
}

export async function stopServer() {
  await new Promise((resolve) => {
    if (server) {
      server?.close(() => resolve(undefined));
    } else {
      resolve(undefined);
    }
  });

  server = undefined;
}
