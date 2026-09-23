/** A heading found in rendered Markdown, used to build tables of contents. */
export interface Heading {
    /** 1 for `#`, 2 for `##`, and so on. */
    level: number;
    /** The `id` attribute given to the heading element. */
    id: string;
    text: string;
}

/** The heading id rule described on `Markdown` in `$types`. */
export function slugify(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}
