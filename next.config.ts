import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  typescript:{
    ignoreBuildErrors:true,
  },
  images:{
  remotePatterns:[
    {hostname:'img.clerk.com'}
  ]  
}
};

export default nextConfig;
