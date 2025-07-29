# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

UIGen is an AI-powered React component generator with live preview. It allows users to describe React components in natural language and generates them in real-time with a live preview.

## Development Commands

### Essential Commands
- `npm run dev` - Start development server with Turbopack on port 3000
- `npm run build` - Create production build
- `npm run lint` - Run ESLint for code quality checks
- `npm run test` - Run tests with Vitest

### Database Commands
- `npm run setup` - Initial setup (installs dependencies + Prisma setup)
- `npm run db:reset` - Reset database to fresh state

### Testing
- Framework: Vitest with React Testing Library
- Test files: `__tests__` directories or `.test.ts`/`.test.tsx` files
- Run single test: `npm run test -- path/to/test`

## Architecture Overview

### Tech Stack
- Next.js 15 with App Router (React Server Components)
- TypeScript
- Tailwind CSS v4
- Prisma ORM with SQLite
- Anthropic Claude AI via Vercel AI SDK
- Monaco Editor for code editing

### Core Concepts

1. **Virtual File System**: The app uses an in-memory file system (`VirtualFileSystem` in `src/lib/file-system.ts`) to manage generated code without writing to disk.

2. **AI Tools**: Located in `src/lib/tools/`, these enable the AI to:
   - Edit code via `str_replace_editor`
   - Manage files via `file_manager`

3. **JSX Transformation**: Real-time JSX transformation happens in `src/lib/transform/` using Babel to enable live preview.

4. **Context Providers**:
   - `ChatContext`: Manages chat messages and AI interactions
   - `FileSystemContext`: Provides file system state across components

### Key Directories
- `src/actions/` - Server actions for Prisma database operations
- `src/app/api/chat/` - AI chat endpoint
- `src/components/preview/` - Live preview iframe implementation
- `src/lib/prompts/` - AI system prompts

### Database Schema
- User authentication with JWT tokens
- Projects linked to users (anonymous projects supported)
- Generated components stored as file entries in database
- The database schema is defined in the @prisma/schema.prisma file. Reference it anytime you need to understand the structure of data stored in the database.

## Important Patterns

1. **Server Components**: Most components are React Server Components by default. Use `"use client"` directive only when needed for interactivity.

2. **Error Handling**: AI tools return structured responses with success/error states. Always handle both cases.

3. **State Management**: Uses React Context API, not external state libraries.

4. **File Paths**: Virtual file system uses absolute paths starting with `/`.

## Environment Variables

Required in `.env`:
- `ANTHROPIC_API_KEY` - Claude API key (optional - app works without it using static responses)
- `JWT_SECRET` - Auto-generated for authentication

## Code Commenting Guidelines
- Use comments sparingly. Only comment complex code.