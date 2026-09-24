import type { IsoDate, NewsPost } from '$types';

const files = import.meta.glob<string>('./posts/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
});

/** Trance ran the site until handing it over to Talonz, whose first post was on June 1, 2003. */
function authorOn(date: IsoDate): string {
    return date < '2003-06-01' ? 'Trance' : 'Talonz';
}

export const newsPosts: NewsPost[] = Object.entries(files)
    .map(([path, body]) => {
        const date = path.slice('./posts/'.length, -'.md'.length);
        return { date, author: authorOn(date), body };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
