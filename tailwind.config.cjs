const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
	content: [
		'./src/**/*.{html,svelte}',
		'./node_modules/svelte-ux/**/*.{svelte,js}',
		'./node_modules/layerchart/**/*.{svelte,js}'
	],
	theme: {
		extend: {
			colors: {
				accent: colors.blue,
        primary:colors.indigo,
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [require('svelte-ux/plugins/tailwind.cjs')]
};
