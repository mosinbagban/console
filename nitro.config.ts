import { defineConfig } from "nitro";

export default defineConfig({
  netlify: {
    config: {
      // Netlify Image CDN remote images
      images: {
        remote_images: ["https://example.com/.*"],
      },
      // Custom headers
      headers: [{ for: "/static/*", values: { "cache-control": "public, max-age=31536000" } }],
      // Custom redirects
      redirects: [{ from: "/old", to: "/new", status: 301 }],
    },
  },
});