import type { Book } from "./book";

export interface BooksQueryResult {
    books: Book[];
    error: BooksServiceError | null;
}

type BooksServiceErrorCode =
    | 'SUPABASE_NOT_CONFIGURED'
    | 'EMPTY_RESULT'
    | 'TABLE_NOT_FOUND'
    | 'QUERY_FAILED'
    | 'UNEXPECTED_ERROR';

export interface BooksServiceError {
    code: BooksServiceErrorCode;
    debugMessage: string;
    tableName?: string;
}

