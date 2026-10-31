## Desarrollo local (Español)

### Requisitos

- Node.js `>=22.12.0`
- npm

### Configuración

1. Instala dependencias:

```bash
npm install
```

2. Crea o revisa tu archivo `.env` con variables de Supabase:

```dotenv
PUBLIC_SUPABASE_ANON_KEY=tu_public_anon_key
PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
PUBLIC_SUPABASE_BOOKS_TABLE=books_dev
```

3. Si usas RLS en Supabase, asegúrate de tener policy de `SELECT` para `anon` o `authenticated`.

### Ejecución en local

Inicia el servidor de desarrollo en segundo plano:

```bash
astro dev --background
```

Gestiona el servidor:

```bash
astro dev status
astro dev logs
astro dev stop
```

### Verificación

```bash
npm run build
```

## Local development (English)

### Requirements

- Node.js `>=22.12.0`
- npm

### Setup

1. Install dependencies:

```bash
npm install
```

2. Create or verify your `.env` file with Supabase variables:

```dotenv
PUBLIC_SUPABASE_ANON_KEY=your_public_anon_key
PUBLIC_SUPABASE_URL=https://your-project.supabase.co
PUBLIC_SUPABASE_BOOKS_TABLE=books_dev
```

3. If RLS is enabled in Supabase, ensure you have a `SELECT` policy for `anon` or `authenticated`.

### Run locally

Start the dev server in background mode:

```bash
astro dev --background
```

Manage the server:

```bash
astro dev status
astro dev logs
astro dev stop
```

### Validation

```bash
npm run build
```
