import type { NextConfig } from "next";

const nextConfig: NextConfig = {
/* config options here */
images: {
    remotePatterns: [
        {
            hostname: "images.unsplash.com",
            protocol: "https",
        },
        {
            hostname: "res.cloudinary.com",
            protocol: "https",
        }
    ]
},
// Disable Turbopack
experimental: {},
typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: false,
},

// Use Babel for compilation
compiler: {
    // Enables the styled-components plugin
    styledComponents: true,
},
};

export default nextConfig;
