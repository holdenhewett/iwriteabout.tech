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
          label: "Portfolio",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "My projects", link: "/portfolio/projects" },
            { label: "Resident Manager API docs", link: "/portfolio/sm-api" },
            { label: "Passpoint API docs", link: "/portfolio/pp-api" },
            { label: "Random MAC addresses", link: "/portfolio/random-mac" },
            { label: "RADIUS security", link: "/portfolio/radsec" },
            { label: "Technical Writer HQ Capstone", link: "/portfolio/twhq-capstone" },
          ],
        },
        {
          label: "Certifications",
          autogenerate: { directory: "certs" },
        },
        {
          label: "Resume",
          autogenerate: { directory: "resume" },
        },
        {
          label: "About",
          autogenerate: { directory: "about" },
        },
      ],
    }),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
  ],
});
