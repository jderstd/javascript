const mergeHeaders = (
    ...headersArray: (HeadersInit | undefined)[]
): [
    string,
    string,
][] => {
    const result: Map<string, string> = new Map<string, string>();

    for (const headers of headersArray) {
        if (!headers) continue;

        if (headers instanceof Headers) {
            for (const [key, value] of headers) {
                result.set(key, value);
            }
        } else if (Array.isArray(headers)) {
            for (let i: number = 0; i < headers.length; i++) {
                const [key, value] = headers[i] as [
                    string,
                    string,
                ];
                result.set(key, value);
            }
        } else {
            for (const key in headers) {
                if (Object.hasOwn(headers, key)) {
                    result.set(key, headers[key] ?? "");
                }
            }
        }
    }

    return Array.from(result.entries());
};

export { mergeHeaders };
