/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental:{
    outputStandalone: true
  
  },
  swcMinify: true,
  // images: {
  //   domains: ['localhost']
  // },
  

}

module.exports = nextConfig
