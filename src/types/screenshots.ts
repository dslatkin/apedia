import type { AssetPath, Markdown, Picture } from './common';

export interface GameVersion {
    stage: 'pre-alpha' | 'alpha';
    number: number;
    label: string;
}

export interface ScreenshotGallery {
    slug: string;
    title: string;
    version: GameVersion;
    intro?: Markdown;
    sections: ScreenshotSection[];
}

export interface ScreenshotSection {
    id: string;
    title: string;
    description?: Markdown;
    screenshots: Screenshot[];
}

export interface Screenshot extends Picture {
    description: Markdown;
    alternates?: AlternateView[];
    submittedBy?: string;
}

export interface AlternateView {
    label: string;
    full: AssetPath;
}
