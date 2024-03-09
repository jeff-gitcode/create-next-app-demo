/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  compiler: {
    styledComponents: true
  },
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
