/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./layouts/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#9d8afe",
				secondary: "#ff88a7",
			},
			screens: {
				xl: { max: "1279px" },
				lg: { max: "1023px" },
				md: { max: "767px" },
				sm: { max: "639px" },
			},
			maxWidth: {
				"8xl": "88rem",
				"9xl": "96rem",
			},
			boxShadow: {
				pop: "0 .5rem 1.5rem rgba(0,0,0,.1)",
			},
		},
	},
	plugins: [],
};
