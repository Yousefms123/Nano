/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"main-color": "#97280e",
				button: "#0e6897",
			},
			fontFamily: {
				Tajawal: ["Tajawal", "sans-serif"],
				Amiri: ["Amiri", "serif"],
			},
			keyframes: {
				"slide-in": {
					"0%": {
						transform: "translateX(100%)",
						opacity: "0",
					},
					"100%": {
						transform: "translateX(0)",
						opacity: "1",
					},
				},
			},
			animation: {
				"slide-in": "slide-in 0.5s ease-out",
			},
		},
	},
	plugins: [],
});
