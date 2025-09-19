import { createResponse } from "@jderstd/core";
import { describe, expect, it } from "vitest";

describe("createResponse test", (): void => {
    it("should work", async (): Promise<void> => {
        const res: Response = createResponse();
        expect(res.status).toBe(200);
    });

    it("should work with status 400", async (): Promise<void> => {
        const res: Response = createResponse({
            status: 400,
        });

        expect(res.status).toBe(400);
    });

    it("should work with headers", async (): Promise<void> => {
        const res: Response = createResponse({
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                success: true,
            }),
        });

        expect(res.status).toBe(200);

        expect(res.headers.get("Content-Type")).toBe("application/json");

        const body: string = await res.text();

        expect(JSON.parse(body)).toStrictEqual({
            success: true,
        });
    });
});
