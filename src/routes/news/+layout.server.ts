import { newsPosts } from '$content/news';
import { groupByMonth } from '$lib/news';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = () => ({
    months: groupByMonth(newsPosts).map(({ id, label, posts }) => ({
        id,
        label,
        count: posts.length,
    })),
});
