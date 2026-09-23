import { newsPosts } from '$content/news';
import { groupByMonth } from '$lib/news';
import type { LayoutServerLoad } from './$types';

/** The months with news, for the archive index and for moving between months. */
export const load: LayoutServerLoad = () => ({
    months: groupByMonth(newsPosts).map(({ id, label, posts }) => ({
        id,
        label,
        count: posts.length,
    })),
});
