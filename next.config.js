/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**/**'
      }
    ]
  },
  transpilePackages: ['lucide-react'] 
}

module.exports = nextConfig
