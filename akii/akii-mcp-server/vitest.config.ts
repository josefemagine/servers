import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['**/*.{test,spec}.{ts,tsx}'],
    coverage: {
      reporter: ['text', 'lcov'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/**/*.d.ts'],
    },
    setupFiles: ['./tests/setup.ts'],
    deps: {
      optimizer: {
        web: {
          include: [],
        },
        ssr: {
          include: ['@supabase/supabase-js', 'vitest'],
        },
      },
    },
  },
});