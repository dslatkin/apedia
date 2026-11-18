import type { MarkdownPage } from '$types';
import { shards, withShardList } from '../community/shards';
import communityShards from './community-shards.md?raw';
import theOriginalGame from './the-original-game.md?raw';

/** The parts of the history, in reading order. Each is served at `/history/<slug>`. */
export const historyParts: MarkdownPage[] = [
    {
        slug: 'the-original-game',
        title: 'The Original Game',
        body: theOriginalGame,
    },
    {
        slug: 'community-shards',
        title: 'Community Shards',
        body: withShardList(communityShards, shards),
    },
];
