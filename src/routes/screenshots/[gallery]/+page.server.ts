import { galleries } from '$content/screenshots';
import { renderMarkdown } from '$lib/server/markdown';
import type { ScreenshotView } from '$lib/views';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () =>
    galleries.map((gallery) => ({ gallery: gallery.slug }));

export const load: PageServerLoad = ({ params }) => {
    const gallery = galleries.find((g) => g.slug === params.gallery);
    if (!gallery) error(404, 'No such gallery');
    return {
        title: `${gallery.title} Screenshots`,
        introHtml: gallery.intro
            ? renderMarkdown(gallery.intro).html
            : undefined,
        sections: gallery.sections.map((section) => ({
            id: section.id,
            title: section.title,
            introHtml: section.description
                ? renderMarkdown(section.description).html
                : undefined,
            screenshots: section.screenshots.map(
                ({ description, ...screenshot }): ScreenshotView => ({
                    ...screenshot,
                    descriptionHtml: renderMarkdown(description).html,
                }),
            ),
        })),
    };
};
