import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "My PWA",
    short_name: "PWA",
    start_url: "/",
    background_color: "#FFFFFF",
    theme_color: "#4194ff",
  };
}
