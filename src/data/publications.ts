import bibRaw from "./publications.bib?raw"
import * as bibtex from "bibtex-parse";

export type Publication = {
    title: string;
    authors: string[];
    venue: string;
    year: number;
    doi?: string;
    pdfUrl?: string;
    abstract?: string;
    tags?: string[];
};

const entries = bibtex.entries(bibRaw);

export const publications: Publication[] = entries.map((entry) => ({
    title: entry.TITLE ?? "",
    authors: (entry.AUTHOR ?? "").split(" and ").map((a) => a.trim()),
    venue: entry.BOOKTITLE ?? entry.JOURNAL ?? "",
    year: Number(entry.YEAR ?? 0),
    doi: entry.DOI,
    abstract: entry.ABSTRACT,
}));
