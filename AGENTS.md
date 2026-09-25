# Agent notes

## Tailwind classes

- When combining classes conditionally or from more than one source, use `twMerge` from
  `tailwind-merge` so conflicting classes resolve in a deterministic order:

    ```svelte
    <div
        class={twMerge(
            'grid grid-cols-1 gap-8',
            split == 'even' && 'lg:grid-cols-2',
            split == 'leftHeavy' && 'lg:grid-cols-[1.618003fr_1fr]',
        )}
    >
    ```

- When writing a literal string of classes outside a `class` attribute (for example a
  constant in a `<script>` block), wrap it in `tw` from `$lib/tw` so the Tailwind VS Code
  extension provides completions and hover info. `tw` returns the string unchanged; use
  `twMerge` instead whenever more than one string of classes is being joined.

    ```ts
    import { tw } from '$lib/tw';

    const card = tw('rounded-lg border border-gray-200 p-4');
    ```

Both functions are listed in `tailwindCSS.classFunctions` in `.vscode/settings.json`, and
`prettier-plugin-tailwindcss` sorts the classes inside them.

## Colors

The old site's palette is defined as theme tokens in `src/routes/layout.css` (`gray-dark`,
`gray-light`, `green-light`, `green-dark`, `teal`, `purple`, `blue`, `orange`, `red`, plus
`black` and `white`). Use those, e.g. `bg-teal` or `border-black`, rather than Tailwind's
default palette, so the design stays on the site's colors. Everything else uses Tailwind's
default scales and breakpoints.

## Comments

Keep comments to a minimum. Don't write comments that restate what names, types or props
already say. Only comment when something would otherwise be confusing or easy to undo by
mistake (for example, why a closed menu is clipped instead of hidden), or to preserve
information that isn't recoverable from the code, such as history of the original site.
Lint directives (`eslint-disable-next-line`) should carry their reason inline.

## Sharing the dev server

To view the dev server from another device, run `npm run dev`, then `npm run tunnel:up` to
open a Cloudflare quick tunnel and print its address. `npm run tunnel:status` shows the
current address and `npm run tunnel:down` closes it; both commands are safe to repeat.

Each tunnel gets a new random `*.trycloudflare.com` address, stored only in the git-ignored
`.tunnel/` folder. Never commit a tunnel address or write it into a tracked file.
