import { defineConfig } from 'father';

export default defineConfig({
  platform: 'browser',
  esm: { output: 'es' },
  cjs: { output: 'lib' },
});
