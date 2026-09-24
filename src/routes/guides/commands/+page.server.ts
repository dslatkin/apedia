import { commandReference } from '$content/guides/commands';
import { renderMarkdown } from '$lib/server/markdown';
import type { CommandView } from '$lib/views';
import type { Shortcut } from '$types';
import type { PageServerLoad } from './$types';

type CommandSection = { id: string; title: string } & (
    { commands: CommandView[] } | { shortcuts: Shortcut[] }
);

export const load: PageServerLoad = () => {
    const sections: CommandSection[] = [
        ...commandReference.groups.map((group) => ({
            id: group.id,
            title: group.title,
            commands: group.commands.map(
                ({ description, ...command }): CommandView => ({
                    ...command,
                    descriptionHtml: renderMarkdown(description).html,
                }),
            ),
        })),
        {
            id: 'shortcuts',
            title: 'Shortcuts',
            shortcuts: commandReference.shortcuts,
        },
    ];
    return {
        title: 'Commands',
        introHtml: renderMarkdown(commandReference.intro).html,
        sections,
    };
};
