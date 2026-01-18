/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['styled-pasya'],
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
