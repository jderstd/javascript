import { defineConfig } from "@apst/tsdown";
import { cjsPreset, dtsPreset, esmPreset } from "@apst/tsdown/presets";

export default defineConfig(
    {
        entry: {
            // public
            index: "./src/index.ts",
            // internal
            "response/common/struct": "./src/response/common/struct.ts",
            "response/json/struct": "./src/response/json/struct.ts",
            "functions/merge-headers": "./src/functions/merge-headers.ts",
        },
    },
    [
        cjsPreset(),
        esmPreset(),
        dtsPreset({
            presetOptions: {
                performanceMode: true,
            },
        }),
    ],
);
