/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'wirex-light-green': '#b4f6cb',
				'wirex-dark-green': '#104845',
				'wirex-black': '#212323',
				'wirex-white': '#fff',
				'wirex-light-gray': '#f5f6f5',
				'wirex-dark-gray': '#82827f',
			},
			backgroundImage: {
				greenGradient:
					'linear-gradient(90deg, rgba(16,72,69,1) 0%, rgba(180,246,203,1) 75%)',
			},
		},
	},
	plugins: [],
};
