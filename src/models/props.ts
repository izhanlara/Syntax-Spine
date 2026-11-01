import type { Locale } from "@i18n/ui";
import type { Book } from "./book";

export interface Props {
    lang: Locale;
    books?: Book[];
    book?: Book;
    errorMessage?: string | null;
}