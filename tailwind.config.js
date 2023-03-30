/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,jsx}",
		"./src/**/**/*.{js,jsx}",
		"./node_modules/tw-elements/dist/js/**/*.js",
	],
	theme: {
		extend: {
			colors: {
				"main-color": "#003585",
			},
		},
	},
	plugins: [],
};
