import type { IsoDate, Markdown } from './common';

export interface NewsPost {
    date: IsoDate;
    body: Markdown;
}
