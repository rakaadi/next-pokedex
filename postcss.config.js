module.exports = {
    plugins: {
        tailwindcss: {
            "config": "./tailwind.config.js",
            "format": "auto",
            "plugins": ["macros"]
        },
        autoprefixer: {},
    },
}