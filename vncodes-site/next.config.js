module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['example.com'], // Replace with your image domains
  },
  env: {
    CUSTOM_API_URL: process.env.CUSTOM_API_URL || 'http://localhost:3000/api',
  },
};