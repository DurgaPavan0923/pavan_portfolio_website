/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  // Enable SWC minification
  swcMinify: true,

  // Production optimizations
  compress: true,

  // Image optimization (for profile, blog images etc.)
  images: {
    domains: ["github.com", "avatars.githubusercontent.com"],
    formats: ["image/avif", "image/webp"],
  },

  // Experimental features (safe for Vercel)
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },

  // Security Headers (Apple/Google standard)
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  // Redirect example (optional future use)
  async redirects() {
    return [
      // Example:
      // {
      //   source: "/github",
      //   destination: "https://github.com/DurgaPavan0923",
      //   permanent: true,
      // },
    ];
  },
};

module.exports = nextConfig;
