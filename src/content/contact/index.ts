import type { MarkdownPage } from '$types';
import contact from './contact.md?raw';
import thanks from './thanks.md?raw';

/** Web3Forms access key for the contact form. It is public by design. */
export const contactFormAccessKey = 'ef3b3a99-9ef7-4b0a-aadc-527523b25008';

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
