import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
   output: 'standalone',
  typescript:{
    ignoreBuildErrors:true,
  },
  eslint:{ignoreDuringBuilds:true},
  images:{
  remotePatterns:[
    {hostname:'img.clerk.com'}
  ]  
},

};

export default nextConfig;
