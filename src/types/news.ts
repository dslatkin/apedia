import type { IsoDate, Markdown } from './common';

/**
 * A single dated news update, one per file. The date is the heading; posts have no titles.
 * The home page shows the most recent posts and the archive index groups them by month,
 * both derived from the full list rather than authored separately.
 */
export interface NewsPost {
    date: IsoDate;
    /** Site owner at the time of posting ("Trance" until May 2003, then "Talonz"). */
    author: string;
    body: Markdown;
}
