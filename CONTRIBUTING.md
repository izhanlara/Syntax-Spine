# Contributing Guidelines

Thank you for your interest in contributing to Syntax & Spine.

These guidelines describe the basic workflow and conventions for contributing to the project.

## How to Contribute

### 1. Report an Issue

Before proposing a significant change, check whether a related issue already exists.

When opening an issue, provide:

- A clear and descriptive title.
- A description of the problem or proposed improvement.
- Steps to reproduce the problem, when applicable.
- Expected behavior and actual behavior, when applicable.

### 2. Create a Branch

Create a dedicated branch for each change.

Use descriptive branch names with the following prefixes:

- `feature/` — New functionality.
- `fix/` — Bug fixes.
- `docs/` — Documentation changes.
- `refactor/` — Code improvements without intended behavior changes.
- `chore/` — Maintenance and configuration changes.

Examples:

```text
feature/book-filters
fix/book-fetching
docs/update-readme
```

### 3. Make Your Changes

Please follow these conventions:

- Use TypeScript for application logic where appropriate.
- Follow Astro's recommended conventions and project structure.
- Keep components focused on a single responsibility.
- Separate data access from presentation logic.
- Avoid duplicating code when a reusable solution makes sense.
- Use semantic HTML and accessible UI patterns.
- Keep dependencies and configuration changes intentional.
- Never commit credentials, secrets, or private environment files.

### 4. Test Your Changes

Before submitting a pull request:

- Run the available linting and formatting checks, if configured.
- Run the production build.
- Verify the affected functionality locally.
- Check responsive layouts and accessibility when UI changes are involved.
- Update documentation when behavior or setup instructions change.

If a change cannot be tested, clearly explain the limitation in the pull request.

### 5. Submit a Pull Request

Pull requests should:

- Explain what changed and why.
- Reference the related issue, if applicable.
- Include screenshots for relevant UI changes.
- Mention any breaking changes or configuration updates.
- Include the checks performed and their results.

Keep pull requests focused on a single concern whenever possible.

## Commit Messages

Use clear, descriptive commit messages.

The following prefixes are recommended:

- `feat:` — New functionality.
- `fix:` — Bug fixes.
- `docs:` — Documentation changes.
- `refactor:` — Code restructuring.
- `chore:` — Maintenance tasks.
- `test:` — Tests.

Examples:

```text
feat: add book collection
fix: handle database query errors
docs: update contributing guidelines
chore: configure environment variables
```

## Environment and Security

- Keep local environment variables in `.env`.
- Use `.env.example` to document the required variable names.
- Never commit real credentials or Supabase service-role keys.
- Apply appropriate Supabase Row Level Security (RLS) policies.
- Do not expose privileged database operations to unauthenticated clients.

## Documentation

Keep the README, configuration instructions, and changelog consistent with the current project state.

Record notable user-facing changes in `docs/CHANGELOG.md`.

## Questions and Suggestions

For questions, ideas, or potential improvements, open an issue in the GitHub repository.

Thank you for helping improve Syntax & Spine.
