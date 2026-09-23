import type { MarkdownPage } from '$types';
import fellowships from './fellowships.md?raw';
import gettingStarted from './getting-started.md?raw';
import teamplay from './teamplay.md?raw';
import technical from './technical.md?raw';

export { classTree } from './classes';
export { commandReference } from './commands';
export { dungeons } from './dungeons';
export { monsters } from './monsters';
export { npcs } from './npcs';
export { obelisks } from './obelisks';

export const gettingStartedGuide: MarkdownPage = {
    slug: 'getting-started',
    title: 'Getting Started',
    body: gettingStarted,
};

export const teamplayGuide: MarkdownPage = {
    slug: 'teamplay',
    title: 'Teamplay',
    author: 'Braiba',
    body: teamplay,
};

export const fellowshipsGuide: MarkdownPage = {
    slug: 'fellowships',
    title: 'Fellowships',
    author: 'Enquillion',
    body: fellowships,
};

export const technicalInfo: MarkdownPage = {
    slug: 'technical',
    title: 'Technical Info',
    body: technical,
};
