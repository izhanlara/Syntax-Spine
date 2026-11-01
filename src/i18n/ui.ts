export const locales = ['es-es', 'en-en'] as const;
import type { BooksServiceError } from '@models/book-service';
export type Locale = (typeof locales)[number];
export interface UIContent {
    pageTitle: string;
    languageName: string;
    nav: {
        ariaLabel: string;
        home: string;
        docs: string;
        collection: string;
        portfolio: string;
    };
    hero: {
        eyebrow: string;
        title: string;
        description: string;
    };
    books: {
        title: string;
        subtitle: string;
        empty: string;
        errors: {
            supabaseNotConfigured: string;
            emptyResult: string;
            tableNotFound: string;
            queryFailed: string;
            unexpected: string;
        };
        listAriaLabel: string;
        cardAriaPrefix: string;
        coverAltPrefix: string;
        noCover: string;
    };
    footer: {
        readMore: string;
        items: Array<{
            title: string;
            description: string;
            link: string;
        }>;
    };
}

const ui: Record<Locale, UIContent> = {
    'es-es': {
        pageTitle: 'Syntax Spine',
        languageName: 'Español',
        nav: {
            ariaLabel: 'Navegación principal',
            home: 'Inicio',
            docs: 'Documentación',
            collection: 'Colección',
            portfolio: 'Portfolio',
        },
        hero: {
            eyebrow: 'Syntax & Spine',
            title: 'Archivo personal de libros para ingeniería de software',
            description:
                'Colección viva de lecturas técnicas almacenadas en Supabase, organizada para consulta rápida y lectura cómoda.',
        },
        books: {
            title: 'Biblioteca técnica',
            subtitle: 'Listado de libros sincronizado con Supabase',
            empty:
                'Aún no hay libros para mostrar. Si ya insertaste datos, revisa RLS (policy SELECT) y reinicia `astro dev`.',
            errors: {
                supabaseNotConfigured: 'La configuración de Supabase no es válida. Revisa las variables de entorno y reinicia el servidor.',
                emptyResult: 'No se devolvieron libros. Si ya tienes datos, revisa la policy RLS de SELECT para anon/authenticated.',
                tableNotFound: 'No se encontró la tabla configurada para libros. Verifica PUBLIC_SUPABASE_BOOKS_TABLE.',
                queryFailed: 'No se pudieron cargar los libros desde Supabase. Revisa la conexión y la estructura de la tabla.',
                unexpected: 'Error inesperado al consultar Supabase.',
            },
            listAriaLabel: 'Listado de libros',
            cardAriaPrefix: 'Libro',
            coverAltPrefix: 'Portada de',
            noCover: 'Sin portada',
        },
        footer: {
            readMore: 'Ver más',
            items: [
                {
                    title: 'Syntax & Spine',
                    description:
                        'Biblioteca técnica personal orientada a arquitectura, ingeniería y desarrollo de software.',
                    link: '/es-es',
                },
                {
                    title: 'Estado',
                    description:
                        'Aplicación en evolución con datos de libros desacoplados del frontend mediante Supabase.',
                    link: '/docs',
                },
                {
                    title: 'Tecnologías',
                    description:
                        'Construido con Astro, TypeScript y una capa de servicios modular para acceso a datos.',
                    link: '/es-es',
                },
            ],
        },
    },
    'en-en': {
        pageTitle: 'Syntax Spine',
        languageName: 'English',
        nav: {
            ariaLabel: 'Main navigation',
            home: 'Home',
            docs: 'Documentation',
            collection: 'Collection',
            portfolio: 'Portfolio',
        },
        hero: {
            eyebrow: 'Syntax & Spine',
            title: 'Personal software engineering book archive',
            description:
                'Living collection of technical books stored in Supabase, organized for quick lookup and comfortable reading.',
        },
        books: {
            title: 'Technical library',
            subtitle: 'Book listing synchronized with Supabase',
            empty:
                'There are no books to show yet. If you already inserted data, check your RLS SELECT policy and restart `astro dev`.',
            errors: {
                supabaseNotConfigured: 'Supabase configuration is invalid. Check environment variables and restart the server.',
                emptyResult: 'No books were returned. If data exists, check your RLS SELECT policy for anon/authenticated roles.',
                tableNotFound: 'Configured books table was not found. Verify PUBLIC_SUPABASE_BOOKS_TABLE.',
                queryFailed: 'Books could not be loaded from Supabase. Check connection and table schema.',
                unexpected: 'Unexpected error while querying Supabase.',
            },
            listAriaLabel: 'Book list',
            cardAriaPrefix: 'Book',
            coverAltPrefix: 'Cover of',
            noCover: 'No cover',
        },
        footer: {
            readMore: 'Read more',
            items: [
                {
                    title: 'Syntax & Spine',
                    description:
                        'Personal technical library focused on software architecture, engineering, and development.',
                    link: '/en-en',
                },
                {
                    title: 'Status',
                    description:
                        'Work-in-progress application with book data decoupled from frontend through Supabase.',
                    link: '/docs',
                },
                {
                    title: 'Technologies',
                    description:
                        'Built with Astro, TypeScript, and a modular service layer for data access.',
                    link: '/en-en',
                },
            ],
        },
    },
};

export function getUI(locale: Locale): UIContent {
    return ui[locale];
}

export function getBooksErrorMessage(locale: Locale, error: BooksServiceError | null): string | null {
    if (!error) {
        return null;
    }

    const bookErrors = getUI(locale).books.errors;

    if (error.code === 'SUPABASE_NOT_CONFIGURED') {
        return bookErrors.supabaseNotConfigured;
    } else if (error.code === 'EMPTY_RESULT') {
        return bookErrors.emptyResult;
    } else if (error.code === 'TABLE_NOT_FOUND') {
        return bookErrors.tableNotFound;
    } else if (error.code === 'QUERY_FAILED') {
        return bookErrors.queryFailed;
    } else if (error.code === 'UNEXPECTED_ERROR') {
        return bookErrors.unexpected;
    }

    return null;
}
