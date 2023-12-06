import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Holden Hewett',
			customCss: [
			  // Path to your Tailwind base styles:
			  './src/tailwind.css',
			],
			social: {
				github: 'https://github.com/holdenhewett',
				linkedin: 'https://www.linkedin.com/in/h0ld3n-h3w3tt-08ab0b113/'
			},
			sidebar: [
				{
					label: 'About',
					autogenerate: { directory: 'about' },
				},
				{
					label: 'Portfolio',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'My Portfolio', link: '/portfolio/projects' },
					],
				},		
				{
					label: 'Resume',
					autogenerate: { directory: 'resume' },
				},
				{
					label: 'Contact',
					autogenerate: { directory: 'contact' },
				},
			],
		}),
        tailwind({
            // Disable the default base styles:
            applyBaseStyles: false,
        }),
	],
});
