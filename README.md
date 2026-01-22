# Recall

A modern web application built with functional programming principles.

## Tech Stack

- **Runtime**: Bun
- **Framework**: Next.js 15
- **API Layer**: tRPC
- **UI Components**: shadcn/ui
- **Authentication**: BetterAuth
- **Linting/Formatting**: Biome
- **Testing**: bun test
- **Functional Programming**: Custom FP utilities (Option, Either, pipe)

## Getting Started

### Prerequisites

- Bun >= 1.0.0

### Installation

```bash
bun install
```

### Development

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Code Quality

```bash
# Lint and format
bun run lint:fix

# Type check
bun run type-check
```

## Project Structure

```
recall/
├── app/              # Next.js app directory
├── server/           # Server-side code
│   ├── trpc/        # tRPC routers and procedures
│   └── auth.ts      # BetterAuth configuration
├── lib/              # Shared utilities
│   ├── utils/       # Utility functions
│   │   └── fp.ts    # Custom functional programming utilities
│   └── trpc/        # tRPC client setup
└── components/       # React components (shadcn/ui)
```

## Code Standards

- **Functional Programming First**: Prefer pure functions and monadic types
- **Type Safety**: Leverage TypeScript's type system fully
- **Monads**: Use Option for nullable values, Either for error handling
- **Composition**: Compose functions over classes using pipe
- **Custom Utilities**: Built from scratch to understand how they work

## Agent Guidelines

See [AGENTS.md](./AGENTS.md) for detailed development guidelines and agent roles.
