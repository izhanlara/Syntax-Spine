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

export function mapBookRowToBook(row: BookRow, index: number): Book {
    return {
        id: row.id ?? `book-${index}`,
        title: row.title?.trim() || row.bookName?.trim() || 'Título sin definir',
        author: row.author?.trim() || row.author_name?.trim() || 'Autor desconocido',
        description: row.description?.trim() || row.summary?.trim() || 'Sin descripción disponible.',
        year: String(row.year ?? row.published_year ?? 'N/D'),
        coverUrl: row.cover_url?.trim()
            || row.image_url?.trim()
            || row.coverUrl?.trim()
            || row.cover?.trim()
            || row.cover_image?.trim()
            || row.portada_url?.trim()
            || row.portada?.trim()
            || '',
        tags: Array.isArray(row.tags) ? row.tags.filter(Boolean) : [],
    };
}
