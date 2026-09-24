import type { AssetPath, ExternalUrl } from './common';

export interface Download {
    id: string;
    title: string;
    version: string;
    fileName: string;
    /** In bytes. */
    fileSize: number;
    file: AssetPath;
    mirrors: Mirror[];
}

export interface Mirror {
    location: string;
    url: ExternalUrl;
}
