/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                fadeInUp: {
                    "0%": { opacity: 0, transform: "translateY(20px)" },
                    "100%": { opacity: 1, transform: "translateY(0)" },
                },
            },
            animation: {
                fadeInUp: "fadeInUp 0.8s ease-out forwards",
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            const delays = {
                ".delay-100": { "animation-delay": "0.1s" },
                ".delay-200": { "animation-delay": "0.2s" },
                ".delay-300": { "animation-delay": "0.3s" },
                ".delay-400": { "animation-delay": "0.4s" },
                ".delay-500": { "animation-delay": "0.5s" },
            };
            addUtilities(delays, ["responsive"]);
        },
    ],
};
