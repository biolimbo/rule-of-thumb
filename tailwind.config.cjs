const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Lato', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				thumbGray: {
					DEFAULT: '#464646',
					300: '#EBEBEB'
				},
				thumbEmerald: {
					DEFAULT: '#3CBBB4'
				},
				thumbYellow: {
					DEFAULT: '#F9AD1D'
				}
			}
		}
	},
	plugins: []
};
