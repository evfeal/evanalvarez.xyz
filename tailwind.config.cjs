/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#458588',
					secondary: '#b16286',
					accent: '#d3869b',
					neutral: '#928374',
					'base-100': '#282828',
					info: '#458588',
					success: '#689d6a',
					warning: '#d79921',
					error: '#cc241d'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};
