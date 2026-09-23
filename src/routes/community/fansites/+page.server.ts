import { fansites } from '$content/community/fansites';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => ({
    title: 'Fansites',
    links: fansites.map((fansite) => ({
        label: fansite.name,
        href: fansite.url,
        description: fansite.description,
    })),
});
