/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.sanity.io']
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
      },
    
};

export default nextConfig;
