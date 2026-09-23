import type { Download } from '$types';

// File sizes are measured from the files in static/. The old page listed 390,437 bytes for both
// Pre-Alpha 12d files, which was a copy-and-paste mistake.
export const downloads: Download[] = [
    {
        id: 'game',
        title: 'Whispers In Akarra (Full Download)',
        version: 'Alpha 1',
        fileName: 'Akarra_A1.zip',
        fileSize: 4709949,
        file: '/files/downloads/Akarra_A1.zip',
        mirrors: [
            {
                location: 'London',
                url: 'http://www.akarra.com/files/Akarra_A1.zip',
            },
            { location: 'Sweden', url: 'http://www.nolife.nu/Akarra_A1.zip' },
            {
                location: 'Canada',
                url: 'http://members.shaw.ca/dandsm/ftp/Akarra_A1.zip',
            },
        ],
    },
    {
        id: 'editor',
        title: 'Public Area Editor',
        version: 'Pre-Alpha 12d',
        fileName: 'PublicAreaEditor.zip',
        fileSize: 214337,
        file: '/files/downloads/PublicAreaEditor.zip',
        mirrors: [
            {
                location: 'London',
                url: 'http://www.akarra.com/files/PublicAreaEditor.zip',
            },
        ],
    },
    {
        id: 'game-pa12d',
        title: 'Whispers In Akarra (pA12d)',
        version: 'Pre-Alpha 12d',
        fileName: 'Akarra_pA12d.zip',
        fileSize: 3612900,
        file: '/files/downloads/Akarra_pA12d.zip',
        mirrors: [
            {
                location: 'London',
                url: 'http://www.akarra.com/files/Akarra_pA12d.zip',
            },
        ],
    },
];
