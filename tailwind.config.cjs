/** @type {import('tailwindcss').Config} */
import preline from 'preline/plugin.js';
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./public/**/*.astro',  
		'./src/**/*.{astro,js,jsx,ts,tsx,vue}',  
		'node_modules/preline/dist/*.js'
	],
	theme: {
		container: {
			screens: {
				  default: '100%'
			}
		},
		fontFamily: {
			sans: 'var(--display-font-family)',
			serif: 'var(--heading-font-family)',
		},
		extend: {
			display: ["group-hover"],
			colors: {
				primary: `rgba(var(--color-primary), <alpha-value>)`,
				secondary:  `rgba(var(--color-secondary), <alpha-value>)`,
				'prim-accent-dark':  `rgba(var(--color-primary-accent-dark), <alpha-value>)`,
				'prim-accent-light':  `rgba(var(--color-primary-accent-light), <alpha-value>)`,
				'sec-accent-dark':  `rgba(var(--color-secondary-accent-dark), <alpha-value>)`,
				'sec-accent-light':  `rgba(var(--color-secondary-accent-light), <alpha-value>)`,  
			},
			textShadow: {
				sm: '0 1px 2px var(--tw-shadow-color)',
				DEFAULT: '0 2px 4px var(--tw-shadow-color)',
				lg: '0 8px 16px var(--tw-shadow-color)',
			},
		},
	},
	corePlugins: {
		container: false
	},
	plugins: [
		preline,
	],
}
