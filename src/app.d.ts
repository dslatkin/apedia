// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        /** Loaded by the root layout, so every page can use it. */
        interface PageData {
            siteTitle: string;
        }
        // interface PageState {}
        // interface Platform {}
    }
}

export {};
