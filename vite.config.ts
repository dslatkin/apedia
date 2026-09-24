import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    // Fix dev container dev server
    // https://vite.dev/guide/troubleshooting#dev-containers-vs-code-port-forwarding
    server: {
        host: '127.0.0.1',
    },
    plugins: [
        tailwindcss(),
        sveltekit({
            compilerOptions: {
                // Force runes mode for the project, except for libraries. Can be removed in svelte 6.
                runes: ({ filename }) =>
                    filename.split(/[/\\]/).includes('node_modules')
                        ? undefined
                        : true,
            },
            adapter: adapter(),
            alias: {
                $types: 'src/types',
                $content: 'src/content',
            },
        }),
    ],
});
