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

export function formatDate(date: IsoDate): string {
    return longDate.format(new Date(date));
}

export function formatMonth(month: string): string {
    return monthYear.format(new Date(`${month}-01`));
}

export function monthOf(date: IsoDate): string {
    return date.slice(0, 7);
}

export function capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
