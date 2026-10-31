import { isSupabaseConfigured, supabase } from '@libs/superbase/superbase';
import { mapBookRowToBook, type BookRow } from '@models/book';
import type { BooksQueryResult } from '@models/book-service';



const configuredTable = import.meta.env.PUBLIC_SUPABASE_BOOKS_TABLE?.trim();
const tableCandidates = configuredTable
    ? [configuredTable]
    : ['books', 'libros', 'products'];

function isMissingTableError(message: string): boolean {
    const normalized = message.toLowerCase();
    return normalized.includes('could not find the table')
        || normalized.includes('relation')
        || normalized.includes('does not exist');
}

async function fetchBooksFromTable(tableName: string): Promise<{ rows: BookRow[]; errorMessage: string | null; }> {
    if (!supabase) {
        return {
            rows: [],
            errorMessage: 'Supabase client is not initialized.',
        };
    }

    const { data, error } = await supabase
        .from(tableName)
        .select('*');

    if (error) {
        return {
            rows: [],
            errorMessage: error.message,
        };
    }

    return {
        rows: (data ?? []) as BookRow[],
        errorMessage: null,
    };
}

export async function getBooks(): Promise<BooksQueryResult> {
    if (!isSupabaseConfigured || !supabase) {
        return {
            books: [],
            error: {
                code: 'SUPABASE_NOT_CONFIGURED',
                debugMessage: 'Supabase environment variables are missing or invalid.',
            },
        };
    }

    try {
        for (const tableName of tableCandidates) {
            const { rows, errorMessage } = await fetchBooksFromTable(tableName);

            if (!errorMessage) {
                const books = rows
                    .map((book, index) => mapBookRowToBook(book, index))
                    .sort((firstBook, secondBook) => firstBook.title.localeCompare(secondBook.title, 'es'));

                if (books.length === 0) {
                    return {
                        books: [],
                        error: {
                            code: 'EMPTY_RESULT',
                            debugMessage: `Table "${tableName}" returned no rows. This may be caused by RLS policies.`,
                            tableName,
                        },
                    };
                }

                return {
                    books,
                    error: null,
                };
            }

            if (!isMissingTableError(errorMessage)) {
                return {
                    books: [],
                    error: {
                        code: 'QUERY_FAILED',
                        debugMessage: `Failed to fetch books: ${errorMessage}`,
                    },
                };
            }
        }

        return {
            books: [],
            error: {
                code: 'TABLE_NOT_FOUND',
                debugMessage: 'No configured books table was found. Check PUBLIC_SUPABASE_BOOKS_TABLE and restart Astro dev server.',
            },
        };
    } catch {
        return {
            books: [],
            error: {
                code: 'UNEXPECTED_ERROR',
                debugMessage: 'Unexpected error while querying Supabase.',
            },
        };
    }
}
