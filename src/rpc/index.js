import { createPlugin } from 'fusion-core';

export default createPlugin({
    deps: {},
    provides: () => ({
        increment: async ({ value }, _ctx) => {
            return { value: value + 1 };
        },
        decrement: async ({ value }, _ctx) => {
            return { value: value - 1 };
        },
    }),
});
