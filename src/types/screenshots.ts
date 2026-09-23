import type { AssetPath, Markdown, Picture } from './common';

/** A release of the game. Galleries are grouped by the version they were taken in. */
export interface GameVersion {
    stage: 'pre-alpha' | 'alpha';
    number: number;
    /** Short form used in menus and file names, e.g. "pA13", "A1". */
    label: string;
}

/** One screenshots page, e.g. "Alpha 1" or "PreAlpha 13". */
export interface ScreenshotGallery {
    slug: string;
    title: string;
    version: GameVersion;
    intro?: Markdown;
    sections: ScreenshotSection[];
}

/** A group of screenshots on a gallery page, e.g. "Normal" or "Caldore Summoning". */
export interface ScreenshotSection {
    /** Used as the `#fragment` anchor. */
    id: string;
    title: string;
    description?: Markdown;
    screenshots: Screenshot[];
}

export interface Screenshot extends Picture {
    description: Markdown;
    /** Extra full-size views of the same moment, e.g. "with names", "2nd screenshot". */
    alternates?: AlternateView[];
    submittedBy?: string;
}

export interface AlternateView {
    label: string;
    full: AssetPath;
}
