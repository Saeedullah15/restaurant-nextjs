/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                redHighlighter1: "#A52A2A",
                redHighlighter2: "#880808",
                redHighlighter3: "#F03328",
                redHighlighter4: "#AD1519",
            },
        },
    },
    plugins: [
        require('daisyui'),
    ],
};
