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
