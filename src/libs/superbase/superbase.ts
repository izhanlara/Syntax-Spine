import { createClient } from '@supabase/supabase-js';

function normalizeSupabaseUrl(rawUrl: string | undefined): string {
    if (!rawUrl) {
        return '';
    }

    if (rawUrl.startsWith('http://') || rawUrl.startsWith('https://')) {
        return rawUrl.replace(/\/$/, '');
    }

    if (rawUrl.startsWith('postgresql://') || rawUrl.startsWith('postgres://')) {
        try {
            const parsedUrl = new URL(rawUrl);
            const projectRefRegex = /^db\.([a-z0-9]+)\.supabase\.co$/i;
            const projectRefMatch = projectRefRegex.exec(parsedUrl.hostname);

            if (projectRefMatch?.[1]) {
                return `https://${projectRefMatch[1]}.supabase.co`;
            }
        } catch {
            return '';
        }
    }

    return '';
}

const supabaseUrl = normalizeSupabaseUrl(import.meta.env.PUBLIC_SUPABASE_URL);
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY?.trim() ?? '';

export const isSupabaseConfigured = Boolean(
    supabaseUrl && supabaseKey && supabaseKey !== 'YOUR_PUBLIC_ANON_KEY',
);

export const supabase = isSupabaseConfigured
    ? createClient(supabaseUrl, supabaseKey, {
        auth: {
            persistSession: false,
        },
    })
    : null;