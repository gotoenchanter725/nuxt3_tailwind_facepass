/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {
            container: {
                center: true,
                padding: "1rem",
                screens: {
                    xl: "1216px",
                },
            },
            colors: {
                "ui-orange": "#F7691A",
                "ui-green": "#419E56",
                "ui-blue": "#3482C3",
                "ui-dark-blue": "#093093",
            },
            backgroundColor: {
                "ui-orange": "#F7691A",
                "ui-green": "#419E56",
                "ui-blue": "#3482C3",
                "ui-dark-blue": "#093093;",
            },
        },
    },
    plugins: [],
};
