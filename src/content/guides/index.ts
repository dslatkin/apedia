import type { MarkdownPage } from '$types';
import fellowships from './fellowships.md?raw';
import gettingStarted from './getting-started.md?raw';
import teamplay from './teamplay.md?raw';
import technical from './technical.md?raw';

export { classTree } from './classes';
export { commandReference } from './commands';
export { dungeons } from './dungeons';
export { monsterLevelBands } from './monster-levels';
export { monsters } from './monsters';
export { npcs } from './npcs';
export { obelisks } from './obelisks';

/** The guides written as prose, in menu order. Each is served at `/guides/<slug>`. */
export const guides: MarkdownPage[] = [
    {
        slug: 'getting-started',
        title: 'Getting Started',
        body: gettingStarted,
    },
    {
        slug: 'teamplay',
        title: 'Teamplay',
        author: 'Braiba',
        body: teamplay,
    },
    {
        slug: 'fellowships',
        title: 'Fellowships',
        author: 'Enquillion',
        body: fellowships,
    },
    {
        slug: 'technical',
        title: 'Technical Info',
        body: technical,
    },
];
