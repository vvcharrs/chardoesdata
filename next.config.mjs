/** @type {import('next').NextConfig} */
const basePath = '/chardoesdata';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: `${basePath}/`,
  images: {
    unoptimized: true
  },
  pageExtensions: ['ts', 'tsx', 'md', 'mdx']
};

export default nextConfig;
