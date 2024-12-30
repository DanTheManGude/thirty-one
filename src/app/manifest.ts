import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "31 Game Strategy",
    short_name: "31 Statagy",
    description: "Provide strategy for 31 game in real time",
    start_url: "/",
    lang: "en",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      // {
      //   src: "favicon.ico",
      //   type: "image/x-icon",
      //   sizes: "48x48",
      // },
      // { src: "apple-icon.png", type: "image/png", sizes: "2084x2084" },
      // { src: "icon.png", type: "image/png", sizes: "2084x2084" },
    ],
  };
}
