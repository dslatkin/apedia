import type { MarkdownPage } from '$types';
import thanks from './thanks.md?raw';

export const thanksPage: MarkdownPage = {
    slug: 'thanks',
    title: 'Special Thanks',
    body: thanks,
};
