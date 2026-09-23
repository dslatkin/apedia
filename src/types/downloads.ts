import type { AssetPath, ExternalUrl } from './common';

/** A downloadable file: the game client or the Public Area Editor. */
export interface Download {
    /** Used as the `#fragment` anchor. */
    id: string;
    title: string;
    version: string;
    fileName: string;
    /** In bytes. */
    fileSize: number;
    /** Copy hosted on this site. */
    file: AssetPath;
    mirrors: Mirror[];
}

export interface Mirror {
    /** Where the mirror is hosted, e.g. "London", "Sweden", "Canada". */
    location: string;
    url: ExternalUrl;
}
