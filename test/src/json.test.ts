import { createJsonResponse } from "@jderjs/core";
import { describe, expect, it } from "vitest";

describe("createJsonResponse test", (): void => {
    it("should work", async (): Promise<void> => {
        const res: Response = createJsonResponse();

        expect(res.status).toBe(200);

        const body: string = await res.text();

        expect(JSON.parse(body)).toStrictEqual({
            success: true,
        });
    });

    it("should work with failure", async (): Promise<void> => {
        const res: Response = createJsonResponse({
            success: false,
            error: {
                code: "server",
            },
        });

        expect(res.status).toBe(400);
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
        });
    });

    it("should work with customization", async (): Promise<void> => {
        const res: Response = createJsonResponse({
            success: false,
            status: 500,
            error: {
                code: "server",
                field: "server",
                message: "server",
            },
        });

        expect(res.status).toBe(500);

        const body: string = await res.text();

        expect(JSON.parse(body)).toStrictEqual({
            success: false,
            error: {
                code: "server",
                field: "server",
                message: "server",
            },
        });
    });
});
