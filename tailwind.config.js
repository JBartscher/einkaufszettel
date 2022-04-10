module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'./src/**/*.{html,js}', // tw-elements
		'./node_modules/tw-elements/dist/js/**/*.js' // tw-elements
	],
	theme: {
		extend: {
			// sizes below 640px see https://stackoverflow.com/questions/68458179/how-do-i-get-tailwind-grid-to-work-on-mobile-under-640px
			screens: {
				'sm': { 'max': '767px' } // all below 768 is sm screen. >767 => md
			}
		}
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('tw-elements/dist/plugin')
	]
}