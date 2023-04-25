interface Options {
  username: string;
  password: string;
  server?: string;
  port?: string;
}

interface Result {
  bar: boolean;
}

export async function init(options: Options): Promise<Result> {
  return {
    bar: true,
  };
}
