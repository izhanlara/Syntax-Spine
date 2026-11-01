import type { Book, BookRow } from "@models/book";

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
