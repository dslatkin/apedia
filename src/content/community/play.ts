import type { MarkdownPage } from '$types';
import play from './play.md?raw';
import { shards, withShardList } from './shards';

const running = shards.filter((shard) => shard.running);

export const playPage: MarkdownPage = {
    slug: 'play',
    title: 'Play Today',
    body: withShardList(play, running).replace(
        '<!-- past-count -->',
        String(shards.length - running.length),
    ),
};
