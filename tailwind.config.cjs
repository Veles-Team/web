/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./index.html', './src/**/*.{svelte,js,ts}'],
	theme: {
		fontFamily: {
			sans: '"Rubik", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-serif	font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif; font-mono	font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
			inter:
				'"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-serif	font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif; font-mono	font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
		},
		extend: {
			colors: {
				black: '#292E39',
				nord: {
					0: '#2E3440',
					1: '#3B4252',
					2: '#434C5E',
					3: '#4C566A',
					4: '#D8DEE9',
					5: '#E5E9F0',
					6: '#ECEFF4',
					7: '#8FBCBB',
					8: '#88C0D0',
					9: '#81A1C1',
					10: '#5E81AC',
					11: '#BF616A',
					12: '#D08770',
					13: '#EBCB8B',
					14: '#A3BE8C',
					15: '#B48EAD'
				}
			}
		}
	}
};
