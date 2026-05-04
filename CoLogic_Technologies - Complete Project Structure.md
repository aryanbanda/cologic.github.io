# CoLogic Technologies — Complete Project Structure

## Overview

This is a full-stack React + Express + tRPC application with database integration, authentication, and production-ready design.

---

## 📁 Directory Structure

### Root Level Files

```
.gitignore                 → Git configuration (excludes node_modules, dist, etc.)
.gitkeep                   → Empty placeholder file
.prettierignore            → Prettier code formatter configuration
.prettierrc                → Prettier formatting rules
components.json            → shadcn/ui component configuration
drizzle.config.ts          → Database migration configuration
ideas.md                   → Project notes and ideas
package.json               → Dependencies and scripts
pnpm-lock.yaml             → Locked dependency versions
tsconfig.json              → TypeScript configuration (main)
tsconfig.node.json         → TypeScript configuration (Node.js)
vite.config.ts             → Vite bundler configuration
vitest.config.ts           → Vitest testing framework configuration
todo.md                    → Project task tracking
```

---

## 📂 Client (Frontend) — `/client`

### Entry Point

```
client/
├── index.html              → Main HTML file (loads React app)
└── main.tsx                → React app initialization with tRPC provider
```

### Source Code

```
client/src/
├── App.tsx                 → Main app component (routes, layout)
├── const.ts                → Constants (login URL, config)
├── index.css               → Global styles (Tailwind, design tokens)
├── main.tsx                → React entry point
│
├── _core/
│   └── hooks/
│       └── useAuth.ts      → Authentication hook (user state, login/logout)
│
├── components/
│   ├── AIChatBox.tsx       → AI chat interface component
│   ├── DashboardLayout.tsx → Sidebar dashboard layout
│   ├── DashboardLayoutSkeleton.tsx → Loading skeleton for dashboard
│   ├── ErrorBoundary.tsx   → Error handling wrapper
│   ├── Footer.tsx          → Footer with contact info
│   ├── ManusDialog.tsx      → Dialog component
│   ├── Map.tsx             → Google Maps integration
│   ├── Navigation.tsx       → Top navigation bar
│   │
│   └── ui/                 → shadcn/ui components (50+ pre-built)
│       ├── accordion.tsx
│       ├── alert.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── form.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── select.tsx
│       ├── table.tsx
│       ├── tabs.tsx
│       ├── textarea.tsx
│       └── ... (40+ more UI components)
│
├── contexts/
│   └── ThemeContext.tsx    → Dark/light theme management
│
├── hooks/
│   ├── useComposition.ts   → React composition utilities
│   ├── useMobile.tsx       → Mobile breakpoint detection
│   ├── usePersistFn.ts     → Persistent function reference
│   └── useScrollReveal.ts  → Scroll animation trigger
│
├── lib/
│   ├── trpc.ts             → tRPC client configuration
│   └── utils.ts            → Utility functions
│
└── pages/
    ├── Home.tsx            → Homepage with hero section
    ├── Services.tsx        → Services listing page
    ├── About.tsx           → About company page
    ├── Contact.tsx         → Contact form page
    ├── Blog.tsx            → Blog listing (placeholder)
    ├── Careers.tsx         → Careers page (placeholder)
    ├── ComponentShowcase.tsx → UI component demo page
    └── NotFound.tsx        → 404 error page
```

### Public Assets

```
client/public/
├── .gitkeep                → Placeholder
└── __manus__/              → Manus debug tools
    ├── debug-collector.js  → Debug collector script
    └── version.json        → Version info
```

---

## 🗄️ Server (Backend) — `/server`

### Main Entry Point

```
server/
├── index.ts                → Server startup (Express + tRPC)
├── routers.ts              → tRPC procedure definitions (API routes)
├── db.ts                   → Database query helpers
└── storage.ts              → S3 file storage helpers
```

### Core Infrastructure (`_core`)

```
server/_core/
├── index.ts                → Server initialization
├── context.ts              → tRPC context (user, auth)
├── cookies.ts              → Session cookie management
├── env.ts                  → Environment variables
├── oauth.ts                → Manus OAuth integration
├── trpc.ts                 → tRPC router setup
│
├── llm.ts                  → LLM (AI) integration
├── imageGeneration.ts      → Image generation API
├── voiceTranscription.ts   → Audio-to-text conversion
├── dataApi.ts              → External data API integration
├── map.ts                  → Google Maps backend integration
├── notification.ts         → Owner notifications
├── sdk.ts                  → Manus SDK initialization
├── systemRouter.ts         → System-level procedures
├── vite.ts                 → Vite dev server integration
│
└── types/
    ├── cookie.d.ts         → Cookie type definitions
    └── manusTypes.ts       → Manus platform types
```

### Testing

```
server/
└── auth.logout.test.ts     → Example vitest test file
```

---

## 🗃️ Database — `/drizzle`

```
drizzle/
├── schema.ts               → Database table definitions (Drizzle ORM)
├── relations.ts            → Table relationships
├── drizzle.config.ts       → Migration configuration
│
├── 0000_thick_mesmero.sql  → Initial database migration
│
└── meta/
    ├── _journal.json       → Migration history
    └── 0000_snapshot.json  → Schema snapshot
```

---

## 📦 Shared Code — `/shared`

```
shared/
├── const.ts                → Shared constants (error messages, timeouts)
├── types.ts                → Shared TypeScript types
│
└── _core/
    └── errors.ts           → Error definitions
```

---

## 🔧 Configuration Files

| File | Purpose |
| --- | --- |
| `package.json` | Dependencies, scripts, project metadata |
| `pnpm-lock.yaml` | Locked versions of all dependencies |
| `tsconfig.json` | TypeScript compiler options |
| `vite.config.ts` | Vite bundler configuration |
| `vitest.config.ts` | Test runner configuration |
| `drizzle.config.ts` | Database migration setup |
| `components.json` | shadcn/ui component paths |
| `.prettierrc` | Code formatting rules |
| `.gitignore` | Git exclusions |

---

## 📝 Logs — `/.manus-logs`

```
.manus-logs/
├── devserver.log           → Dev server startup and errors
├── browserConsole.log      → Client-side console logs
├── networkRequests.log     → HTTP requests and responses
└── sessionReplay.log       → User interaction events
```

---

## 🔌 Key Features & Integrations

### Authentication

- **Manus OAuth** integration (`server/_core/oauth.ts`)

- Session management with cookies (`server/_core/cookies.ts`)

- Protected procedures with `protectedProcedure`

### Database

- **Drizzle ORM** for type-safe queries

- MySQL/TiDB support

- Automatic migrations with `pnpm db:push`

### Frontend Components

- **50+ shadcn/ui components** pre-installed

- **Tailwind CSS 4** for styling

- **Responsive design** with mobile-first approach

### Backend Services

- **tRPC** for type-safe API routes

- **LLM integration** (AI chat, text generation)

- **Image generation** API

- **Voice transcription** (Whisper API)

- **Google Maps** integration

- **S3 file storage** for media

### Testing

- **Vitest** for unit testing

- Example test: `server/auth.logout.test.ts`

---

## 📄 Important Files to Know

| File | What It Does |
| --- | --- |
| `client/src/App.tsx` | Route definitions and main layout |
| `client/src/pages/Home.tsx` | Homepage with hero section |
| `server/routers.ts` | All API endpoints (tRPC procedures) |
| `drizzle/schema.ts` | Database table definitions |
| `server/db.ts` | Database query helpers |
| `client/src/index.css` | Global styles and design tokens |
| `package.json` | Run `pnpm dev` to start dev server |

---

## 🚀 Common Commands

```markdown
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Run tests
pnpm test

# Push database changes
pnpm db:push

# Format code
pnpm format
```

---

## 📊 File Count Summary

- **Frontend Components**: 60+ (UI library + custom)

- **Pages**: 7 (Home, Services, About, Contact, Blog, Careers, 404)

- **Server Procedures**: Multiple (defined in `server/routers.ts`)

- **Database Tables**: Defined in `drizzle/schema.ts`

- **Total Source Files**: ~150+ (excluding node_modules)

---

## 🎨 Design & Styling

- **Global Styles**: `client/src/index.css`

- **Theme**: Dark/Light mode support via `client/src/contexts/ThemeContext.tsx`

- **Typography**: Apple system font stack

- **Color Palette**: Navy (#0B1F3A), Green (#2ECC71), Light gray (#F5F7FA)

- **Components**: Tailwind CSS + shadcn/ui

---

## 🔐 Environment Variables

Automatically injected by Manus platform:

- `DATABASE_URL` — Database connection string

- `JWT_SECRET` — Session signing key

- `VITE_APP_ID` — OAuth application ID

- `OAUTH_SERVER_URL` — OAuth backend

- `BUILT_IN_FORGE_API_KEY` — Manus API key

- `VITE_FRONTEND_FORGE_API_KEY` — Frontend API key

---

## 📌 Quick Navigation

**To modify:**

- **Homepage**: Edit `client/src/pages/Home.tsx`

- **Navigation**: Edit `client/src/components/Navigation.tsx`

- **Styles**: Edit `client/src/index.css`

- **API routes**: Edit `server/routers.ts`

- **Database**: Edit `drizzle/schema.ts`, then run `pnpm db:push`

- **Footer**: Edit `client/src/components/Footer.tsx`

