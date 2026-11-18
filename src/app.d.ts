declare global {
    namespace App {
        interface PageData {
            siteTitle: string;
            siteDescription: string;
            archiveNoticeHtml?: string;
        }
    }
}

export {};
