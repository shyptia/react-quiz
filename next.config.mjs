/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    redirects: () => [
    {
      source: "/",
      destination: "/language",
      permanent: false,
    },
  ],
};

export default nextConfig;
