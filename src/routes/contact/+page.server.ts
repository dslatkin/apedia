import { contactFormAccessKey, contactPage } from '$content/contact';
import { loadMarkdownPage } from '$lib/server/pages';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => ({
    ...loadMarkdownPage(contactPage),
    accessKey: contactFormAccessKey,
});
