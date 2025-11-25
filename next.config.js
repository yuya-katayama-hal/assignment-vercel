/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath:
    "/" +
    process.env.REPO_NAME +
    (process.env.PR_NUMBER ? `/pr/${process.env.PR_NUMBER}` : ""),
};

module.exports = nextConfig;
