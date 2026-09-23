/** @type {import("prettier").Config} */
const config = {
    singleQuote: true,
    trailingComma: 'all',
    tabWidth: 4,
    plugins: ['prettier-plugin-svelte'],
    overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
};

export default config;
