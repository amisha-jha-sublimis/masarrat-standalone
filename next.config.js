/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
       forceSwcTransforms: true,
   },
}

module.exports = nextConfig
// next.config.js
module.exports = {
    // Target must be serverless
    target: 'serverless'
};