/** @type {import("prettier").Config} */
const config = {
    singleQuote: true,
    trailingComma: 'all',
    tabWidth: 4,
    plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
    overrides: [
        { files: '*.svelte', options: { parser: 'svelte' } },
        {
            files: '*.yml',
            options: {
                tabWidth: 2,
            },
        },
    ],
    tailwindStylesheet: './src/routes/layout.css',
    tailwindFunctions: ['tw', 'twMerge'],
};

export default config;
