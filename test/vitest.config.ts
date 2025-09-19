import { defineConfig } from "vitest/config";

export default defineConfig({
    optimizeDeps: {
        exclude: [
            "@jderstd/core",
        ],
    },
    test: {
        logHeapUsage: true,
    },
});
