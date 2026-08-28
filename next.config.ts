import type { NextConfig } from "next";
import { MINI_HIDDEN_ROUTES, isMini } from "./lib/launch-mode";

const nextConfig: NextConfig = {
  async redirects() {
    if (!isMini) return [];
    return MINI_HIDDEN_ROUTES.map(source => ({
      source,
      destination: '/',
      permanent: false,
    }));
  },
};

export default nextConfig;
