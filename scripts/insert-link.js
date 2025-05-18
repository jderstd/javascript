import * as path from "node:path";

import { MarkdownPageEvent } from "typedoc-plugin-markdown";

/**
 * @param {import("typedoc-plugin-markdown").MarkdownApplication} app
 */
export const load = (app) => {
    app.renderer.on(MarkdownPageEvent.END, insert);
};

const core = path.resolve(
    process.cwd(),
    "..",
    "..",
    "apis",
    "core",
    "README.md",
);
const hono = path.resolve(
    process.cwd(),
    "..",
    "..",
    "apis",
    "hono",
    "README.md",
);

/**
 * @param {import("typedoc-plugin-markdown").MarkdownPageEvent} page
 */
const insert = (page) => {
    if (page.filename === core || page.filename === hono) {
        const head = "[< Back](./../../README.md)\n\n";
        page.contents = head + page.contents;
    }
};
