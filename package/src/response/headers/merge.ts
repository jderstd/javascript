const mergeHeaders = (
    ...headers: (HeadersInit | undefined)[]
): [string, string][] => {
    const result = new Map<string, string>();

    for (const h of headers) {
        if (!h) continue;

        if (h instanceof Headers) {
            for (const [key, value] of h) {
                result.set(key, value);
            }
        } else if (Array.isArray(h)) {
            for (let i: number = 0; i < h.length; i++) {
                const [key, value] = h[i] as [string, string];
                result.set(key, value);
            }
        } else {
            for (const key in h) {
                if (Object.prototype.hasOwnProperty.call(h, key)) {
                    result.set(key, h[key] ?? "");
                }
            }
        }
    }

    return Array.from(result.entries());
};

export { mergeHeaders };
