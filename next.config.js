/** @type {import('next').NextConfig} */
// If the help center is served under a subpath (e.g. example.com/help), set:
// NEXT_PUBLIC_BASE_PATH=/help
// in the host env and rebuild so routes and assets resolve correctly.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim();
const nextConfig = {
  ...(basePath ? { basePath } : {}),
};
module.exports = nextConfig;
