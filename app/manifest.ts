import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "VIP Editor",
    short_name: "VIP Editor",
    description: "Photo, video and audio editing in one elegant app.",
    start_url: "/",
    display: "standalone",
    background_color: "#F3E6EF",
    theme_color: "#3A0D2C",
    icons: [
      { src: "/logo.png", sizes: "1024x1024", type: "image/png" },
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
