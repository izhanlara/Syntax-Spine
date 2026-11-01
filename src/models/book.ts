export interface BookRow {
    id?: number | string;
    createdAt?: string | null;
    bookName?: string | null;
    cover?: string | null;
    coverUrl?: string | null;
    portada?: string | null;
    portada_url?: string | null;
    cover_image?: string | null;
    status?: boolean | null;
    title?: string | null;
    author?: string | null;
    author_name?: string | null;
    description?: string | null;
    summary?: string | null;
    year?: number | string | null;
    published_year?: number | string | null;
    cover_url?: string | null;
    image_url?: string | null;
    tags?: string[] | null;
}

export interface Book {
    id: number | string;
    title: string;
    author: string;
    description: string;
    year: string;
    coverUrl: string;
    tags: string[];
}
