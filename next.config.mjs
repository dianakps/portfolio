/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// export default nextConfig;

/**
 * @type {import('next').NextConfig}
 */
// Correct for ES module
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
