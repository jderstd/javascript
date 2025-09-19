import type { HeaderTuple } from "@jderstd/core";

import { mergeHeaders } from "@jderstd/core/functions/merge-headers";
import { describe, expect, it } from "vitest";

describe("mergeHeaders test", (): void => {
    it("should work", async (): Promise<void> => {
        const headers: HeaderTuple[] = [
            [
                "Content-Type",
                "application/json",
            ],
            [
                "X-Test",
                "test",
            ],
        ];

        const result: HeaderTuple[] = mergeHeaders(headers);

        expect(result).toStrictEqual([
            [
                "Content-Type",
                "application/json",
            ],
            [
                "X-Test",
                "test",
            ],
        ]);
    });

    it("should work with array", async (): Promise<void> => {
        const headers: HeaderTuple[] = [
            [
                "Content-Type",
                "application/json",
            ],
            [
                "X-Test",
                "test",
            ],
        ];

        const headers2: HeaderTuple[] = [
            [
                "X-Test-2",
                "test2",
            ],
        ];

        const result: HeaderTuple[] = mergeHeaders(headers, headers2);

        expect(result).toStrictEqual([
            [
                "Content-Type",
                "application/json",
            ],
            [
                "X-Test",
                "test",
            ],
            [
                "X-Test-2",
                "test2",
            ],
        ]);
    });

    it("should work with array and object", async (): Promise<void> => {
        const headers: HeaderTuple[] = [
            [
                "Content-Type",
                "application/json",
            ],
            [
                "X-Test",
                "test",
            ],
        ];

        const headers2: Record<string, string> = {
            "X-Test-2": "test2",
        };

        const result: HeaderTuple[] = mergeHeaders(headers, headers2);

        expect(result).toStrictEqual([
            [
                "Content-Type",
                "application/json",
            ],
            [
                "X-Test",
                "test",
            ],
            [
                "X-Test-2",
                "test2",
            ],
        ]);
    });
});
