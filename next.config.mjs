/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 🔥 REQUIRED for GitHub Pages

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    unoptimized: true, // 🔥 REQUIRED (remotePatterns won't work in static export)
  },

  // Keep your redirect (this is fine)
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.adeelatta.dev",
          },
        ],
        destination: "https://adeelatta.dev/:path*",
        permanent: true,
      },
    ]
  },
}

export default nextConfig