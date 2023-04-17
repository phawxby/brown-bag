import { Client } from "pg";

export default async function getPgClient() {
  const client = new Client({
    user: process.env.PG_USER,
    password: process.env.PG_PASS,
    database: process.env.PG_DB,
    host: process.env.PG_HOST,
    port: parseInt(process.env.PG_PORT || "5432"),
  });

  await client.connect();

  return client;
}
