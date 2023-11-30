import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                text: "rgb(var(--text))",
                background: "rgb(var(--background))",
                primary: "rgb(var(--primary))",
                secondary: "rgb(var(--secondary))",
                accent: "rgb(var(--accent))",
            },
            fontSize: {
                sm: "0.800rem",
                base: "1rem",
                xl: "1.250rem",
                "2xl": "1.563rem",
                "3xl": "1.954rem",
                "4xl": "2.442rem",
                "5xl": "3.053rem",
            },
            boxShadow: {
                lg: "0 10px 15px -3px rgb(var(--secondary) / .1), 0 4px 6px -4px rgb(var(--secondary) / .1)",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
export default config;
