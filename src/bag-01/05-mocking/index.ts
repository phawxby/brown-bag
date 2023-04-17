import { error, log, warn } from "./logging";

export function callConsoleThroughLib(val: string) {
  log(val);
  warn(val);
  error(val);
}
