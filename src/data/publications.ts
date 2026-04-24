export type Publication = {
    title: string;
    authors: string[];
    venue: string;
    year: number;
    doi?: string;
    pdfUrl?: string;
    abstract?: string;
    tags?: string[];
}

export const publications: Publication[] = []