import { clanDirectory } from '$content/community/clans';
import { formatDate } from '$lib/format';
import { renderMarkdown } from '$lib/server/markdown';
import type { ClanView } from '$lib/views';
import type { Link } from '$types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
    const names = new Map(
        clanDirectory.clans.map((clan) => [clan.id, clan.name]),
    );
    const toLinks = (ids: string[]): Link[] =>
        ids.map((id) => ({ label: names.get(id) ?? id, href: `#${id}` }));
    const checked = formatDate(clanDirectory.diplomacyUpdated);
    const intro = `${clanDirectory.intro}\n\n_Allied and hostile settings were last checked in game on ${checked}._`;
    return {
        title: 'Guilds & Clans',
        introHtml: renderMarkdown(intro).html,
        sections: clanDirectory.clans.map(
            (clan): ClanView & { title: string } => ({
                id: clan.id,
                title: clan.name,
                name: clan.name,
                tag: clan.tag,
                creators: clan.creators,
                requirements: clan.requirements,
                allied: toLinks(clan.allied),
                hostile: toLinks(clan.hostile),
                links: clan.links ?? [],
                quote: clan.quote,
            }),
        ),
    };
};
