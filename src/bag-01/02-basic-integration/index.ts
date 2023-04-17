import crypto from "crypto";

export function encrypt(toEncrypt: string): string {
  const encryption_key = "byz9VFNtbRQM0yBODcCb1lrUtVVH3D3x";
  const initialization_vector = "X05IGQ5qdBnIqAWD";

  // "aes-128-ccm";
  const cipher = crypto.createCipheriv(
    "aes-256-cbc",
    Buffer.from(encryption_key),
    Buffer.from(initialization_vector)
  );
  var crypted = cipher.update(toEncrypt, "utf8", "hex");
  crypted += cipher.final("hex");
  return crypted;
}

export function decrypt(crypted) {
  const encryption_key = "byz9VFNtbRQM0yBODcCb1lrUtVVH3D3x";
  const initialization_vector = "X05IGQ5qdBnIqAWD";

  const decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    Buffer.from(encryption_key),
    Buffer.from(initialization_vector)
  );
  let dec = decipher.update(crypted, "hex", "utf8");
  dec += decipher.final("utf8");
  return dec;
}
