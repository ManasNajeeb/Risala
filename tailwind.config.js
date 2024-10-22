/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    darkMode: "media",
    theme: {
        fontFamily: {
            sans: ["RethinkSans", "sans-serif", "ui-sans-serif", "system-ui"],
        },
        extend: {
            backgroundImage: {
                auth: "url('../img/alaqsa-mosque.png')",
            },
        },
    },
    plugins: [],
};
