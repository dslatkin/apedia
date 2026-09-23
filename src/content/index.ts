// Content for the Akarrian Encyclopedia, migrated from the legacy pages in static/.
//
// Data that the old site showed as tables lives in TypeScript modules typed with src/types.
// Prose (news posts, guides, contact pages) lives in plain Markdown files next to them.
// Images and downloads stay in static/ and are referenced by root-relative asset paths.

export { clanDirectory } from './community/clans';
export { fansites } from './community/fansites';
export { contactPage, thanksPage } from './contact';
export { downloads } from './downloads';
export { accessories } from './equipment/accessories';
export { armor } from './equipment/armor';
export { items } from './equipment/items';
export { scrolls } from './equipment/scrolls';
export { weapons } from './equipment/weapons';
export * from './equipment/categories';
export * from './guides';
export { newsPosts } from './news';
export * from './screenshots';
export { site } from './site';
