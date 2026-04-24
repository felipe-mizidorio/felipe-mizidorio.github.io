declare module "bibtex-parse" {
    export interface BibEntry {
        type: string;
        key: string;
        [field: string]: string | undefined;
    }
    export function entries(input: string): BibEntry[];
}