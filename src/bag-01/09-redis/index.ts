import Redis from "ioredis";

const redis = new Redis(12345, "foo.myenergi.com");

export async function setValue(key: string, value: string) {
  await redis.set(key, value);
}

export async function getValue(key: string) {
  return await redis.get(key);
}
