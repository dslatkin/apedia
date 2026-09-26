import { npcs } from '$content/guides/npcs';
import { renderMarkdown } from '$lib/server/markdown';
import type { NpcView } from '$lib/views';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => ({
    title: 'NPC Locations',
    npcs: npcs.map(({ notes, ...npc }): NpcView => ({
        ...npc,
        notesHtml: notes ? renderMarkdown(notes).html : undefined,
    })),
});
