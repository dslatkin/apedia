import type { IsoDate } from '$types';

const longDate = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long',
    timeZone: 'UTC',
});
const monthYear = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
});

/** "2003-10-27" becomes "October 27, 2003". */
export function formatDate(date: IsoDate): string {
    return longDate.format(new Date(date));
}

/** "2003-10" becomes "October 2003". */
export function formatMonth(month: string): string {
    return monthYear.format(new Date(`${month}-01`));
}

/** The "YYYY-MM" part of a date. */
export function monthOf(date: IsoDate): string {
    return date.slice(0, 7);
}

/** 4709949 becomes "4.49 MB (4,709,949 bytes)", as the Downloads page wrote it. */
export function formatBytes(bytes: number): string {
    const megabytes = (bytes / 1_048_576).toFixed(2);
    return `${megabytes} MB (${bytes.toLocaleString('en-US')} bytes)`;
}

export function capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
