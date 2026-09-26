import type { ExternalUrl, FragmentHref, Href } from '$types';

export function isExternal(href: Href): href is ExternalUrl {
    return /^(https?:|mailto:)/.test(href);
}

export function isFragment(href: Href): href is FragmentHref {
    return href.startsWith('#');
}
