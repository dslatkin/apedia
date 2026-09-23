import type { MarkdownPage } from '$types';
import contact from './contact.md?raw';
import thanks from './thanks.md?raw';

export const contactPage: MarkdownPage = {
    slug: 'contact',
    title: 'Contact Me',
    body: contact,
};

export const thanksPage: MarkdownPage = {
    slug: 'thanks',
    title: 'Special Thanks',
    body: thanks,
};
