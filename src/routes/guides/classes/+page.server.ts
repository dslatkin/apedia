import { classTree } from '$content/guides/classes';
import { renderMarkdown } from '$lib/server/markdown';
import type { CharacterClassView } from '$lib/views';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
    const names = new Map(classTree.classes.map((c) => [c.id, c.name]));
    const classes = classTree.classes.map(
        ({ description, ...characterClass }): CharacterClassView => ({
            ...characterClass,
            descriptionHtml: description
                ? renderMarkdown(description).html
                : undefined,
            parentName: characterClass.parent
                ? names.get(characterClass.parent)
                : undefined,
        }),
    );
    return {
        title: 'Character Classes',
        introHtml: renderMarkdown(classTree.intro).html,
        classes,
    };
};
