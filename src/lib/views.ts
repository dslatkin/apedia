import type {
    CharacterClass,
    Command,
    IsoDate,
    Item,
    Link,
    Npc,
    Quote,
    Screenshot,
} from '$types';

export interface NewsPostView {
    date: IsoDate;
    html: string;
}

export interface ScreenshotView extends Omit<Screenshot, 'description'> {
    descriptionHtml: string;
}

export interface CommandView extends Omit<Command, 'description'> {
    descriptionHtml: string;
}

export interface ItemView extends Omit<Item, 'notes'> {
    notesHtml?: string | undefined;
}

export interface NpcView extends Omit<Npc, 'notes'> {
    notesHtml?: string | undefined;
}

export interface CharacterClassView extends Omit<
    CharacterClass,
    'description'
> {
    descriptionHtml?: string | undefined;
    parentName?: string | undefined;
}

export interface ClanView {
    id: string;
    name: string;
    tag: string;
    creators: string[];
    requirements?: string | undefined;
    allied: Link[];
    hostile: Link[];
    links: Link[];
    quote?: Quote | undefined;
}
