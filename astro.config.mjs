import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Holden Hewett",
      customCss: [
        // Path to your Tailwind base styles:
        "./src/tailwind.css",
      ],
      social: {
        github: "https://github.com/holdenhewett",
        linkedin: "https://www.linkedin.com/in/h0ld3n-h3w3tt-08ab0b113/",
      },
      sidebar: [
        {
          label: "About",
          autogenerate: { directory: "about" },
        },
        {
          label: "Portfolio",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "My Projects", link: "/portfolio/projects" },
            { label: "Site Manager API Docs", link: "/portfolio/sm-api" },
            { label: "Passpoint API Docs", link: "/portfolio/pp-api" },
            { label: "Technical Writer HQ Capstone", link: "/portfolio/twhq-capstone" },
          ],
        },
        {
          label: "Resume",
          autogenerate: { directory: "resume" },
        },
      ],
    }),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
  ],
});
