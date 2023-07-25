interface Options {
  username: string;
  password: string;
  server?: string;
  port?: string;
}

interface Result {
  bar: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function init(options: Options): Promise<Result> {
  return {
    bar: true,
  };
}
