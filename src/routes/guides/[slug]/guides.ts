import type { MarkdownPage } from '$types';
import fellowships from './fellowships.md?raw';
import gettingStarted from './getting-started.md?raw';
import teamplay from './teamplay.md?raw';
import technical from './technical.md?raw';

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
