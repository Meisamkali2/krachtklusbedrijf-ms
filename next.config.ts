import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/nl/vloeren-legger",
        destination: "/vloeren",
        permanent: true,
      },
      {
        source: "/nl/contact",
        destination: "/#contact",
        permanent: true,
      },
      {
        source: "/nl/schilder-in-de-buurt",
        destination: "/schilderwerk",
        permanent: true,
      },
      {
        source: "/nl/projecten",
        destination: "/projecten",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
