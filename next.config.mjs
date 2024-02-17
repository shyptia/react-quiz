/** @type {import('next').NextConfig} */
import i18Config from './next-i18next.config.js';

const {i18n} = i18Config;

const nextConfig = {
  i18n,
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
