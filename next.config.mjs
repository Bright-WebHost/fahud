/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const nextConfig = {
  reactCompiler: true,
  output: process.env.NODE_ENV === "production" ? "export" : undefined,
  basePath: isGitHubPages ? "/Fahud" : "",
  images: {
    unoptimized: true, // Required for static export in Next.js
  },
};

export default nextConfig;
