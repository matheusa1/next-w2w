/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.API_KEY,
    SEARCH_TV: process.env.SEARCH_TV,
    SEARCH_MOVIE: process.env.SEARCH_MOVIE,
    IMAGE: process.env.IMAGE,
    MOVIE: process.env.MOVIE,
    TV: process.env.TV,
  },
};

module.exports = nextConfig;
