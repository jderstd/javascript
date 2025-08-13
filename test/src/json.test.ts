import { createJsonResponse, type JsonResponse } from "@jderjs/core";
import { describe, expect, it } from "vitest";

describe("createJsonResponse test", (): void => {
    it("should work", async (): Promise<void> => {
        const res: Response = createJsonResponse();

        expect(res.status).toBe(200);

        const body: string = await res.text();

        expect(JSON.parse(body)).toStrictEqual({
            success: true,
        } satisfies JsonResponse);
    });

    it("should work with data", async (): Promise<void> => {
        const res: Response = createJsonResponse({
            data: {
                message: "Hello, World!",
            },
        });

        expect(res.status).toBe(200);

        const body: string = await res.text();

        expect(JSON.parse(body)).toStrictEqual({
            success: true,
            data: {
                message: "Hello, World!",
            },
        } satisfies JsonResponse);
    });

    it("should work as failure", async (): Promise<void> => {
        const res: Response = createJsonResponse({
            errors: [
                {
                    code: "server",
                },
            ],
        });

        expect(res.status).toBe(400);

        const body: string = await res.text();

        expect(JSON.parse(body)).toStrictEqual({
            success: false,
            errors: [
                {
                    code: "server",
                },
            ],
        } satisfies JsonResponse);
    });

    it("should work as failure with success: false", async (): Promise<void> => {
        const res: Response = createJsonResponse({
            success: false,
            errors: [
                {
                    code: "server",
                },
            ],
        });

        expect(res.status).toBe(400);

        const body: string = await res.text();

        expect(JSON.parse(body)).toStrictEqual({
            success: false,
            errors: [
                {
                    code: "server",
                },
            ],
        } satisfies JsonResponse);
    });

    it("should work with customization", async (): Promise<void> => {
        const res: Response = createJsonResponse({
            success: false,
            status: 500,
            headers: [
                [
                    "X-Test",
                    "test",
                ],
            ],
            errors: [
                {
                    code: "server",
                    path: [
                        "server",
                    ],
                    message: "server",
                },
            ],
        });

        expect(res.status).toBe(500);

        expect(res.headers.get("X-Test")).toBe("test");

        const body: string = await res.text();

        expect(JSON.parse(body)).toStrictEqual({
            success: false,
            errors: [
                {
                    code: "server",
                    path: [
                        "server",
                    ],
                    message: "server",
                },
            ],
        } satisfies JsonResponse);
    });
});
