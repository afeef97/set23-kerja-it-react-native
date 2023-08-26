/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
        "./src/screens/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                sm: "270px",
                md: "375px",
                lg: "768px",
            },
        },
    },
    plugins: [],
};
