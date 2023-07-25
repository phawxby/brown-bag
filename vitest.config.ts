import type { UserConfig } from 'vitest';

const test: UserConfig = {
  setupFiles: ['./vitestSetup.ts'],
  coverage: {
    branches: 75,
    lines: 75,
    functions: 75,
    statements: 75,
    enabled: false
  }
};

export default {
  test
};
