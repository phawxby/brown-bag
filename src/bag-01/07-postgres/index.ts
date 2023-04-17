import getPgClient from "./getPgClient";

export async function getEmails() {
  const client = await getPgClient();

  const result = await client.query<{
    guid: string;
    username: string;
    email: string;
  }>(`SELECT * FROM users;`);

  const rows = new Set<string>();
  for (const row of result.rows) {
    rows.add(row.email);
  }

  return rows;
}
