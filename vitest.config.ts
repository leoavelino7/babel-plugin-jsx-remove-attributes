import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [],
  root: "./tests",
  test: {
    globals: true,
    environment: "jsdom",
  },
});
