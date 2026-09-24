import type { IsoDate, Markdown } from './common';

export interface NewsPost {
    date: IsoDate;
    author: string;
    body: Markdown;
}
