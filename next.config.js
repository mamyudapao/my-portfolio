/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        optimizeFonts: true,
    },
};
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require("next-transpile-modules")(["three"]);
module.exports = withTM();

module.exports = nextConfig;