# NoteHub - Next.js Notes Application

A modern notes management application built with **Next.js 16**, **React 19**, and **TypeScript**. This project demonstrates advanced routing patterns including dynamic routes, optional catch-all routes, and intercepting routes with modal functionality.

## 🎯 Features

- **Create, Read, Delete Notes** - Full CRUD operations for managing notes
- **Advanced Filtering** - Filter notes by tag (Todo, Work, Personal, Meeting, Shopping)
- **Search Functionality** - Search notes by title and content with debouncing
- **Pagination** - Navigate through paginated note lists
- **Modal Previews** - Intercepting routes for quick note previews
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Form Validation** - Robust form validation using Formik and Yup
- **Real-time State Management** - React Query for efficient server state management
- **Type-Safe** - Full TypeScript support for type safety

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 16** - React framework with built-in routing and SSR
- **React 19** - UI library
- **TypeScript** - Type safety and better DX

### State Management & Data Fetching
- **TanStack React Query** - Server state management with caching and synchronization
- **Axios** - HTTP client for API requests

### Form Management
- **Formik** - Form state management and validation
- **Yup** - Schema validation library

### UI Components & Styling
- **CSS Modules** - Scoped styling for components
- **React Hot Toast** - Toast notifications for user feedback
- **React Paginate** - Pagination component

### Utilities
- **use-debounce** - Debounce hook for search optimization
- **ESLint** - Code quality and linting

## 📦 Project Structure

```
├── app/                          # Next.js app directory (server + client routes)
│   ├── @modal/                  # Modal slot for intercepting routes
│   │   └── (.)notes/[id]/       # Intercepting route for note preview
│   ├── notes/                   # Notes routes
│   │   ├── [id]/                # Dynamic note detail page
│   │   └── filter/              # Filter layout with sidebar
│   │       ├── @sidebar/        # Sidebar slot
│   │       └── [...slug]/       # Optional catch-all for tag filtering
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles
│
├── components/                   # Reusable React components
│   ├── Header/                  # Header component
│   ├── Footer/                  # Footer component
│   ├── Modal/                   # Modal wrapper
│   ├── NoteForm/                # Form for creating notes
│   ├── NoteList/                # List display for notes
│   ├── Pagination/              # Pagination controls
│   ├── SearchBox/               # Search input
│   └── TanStackProvider/        # React Query provider
│
├── lib/                         # Utilities and helpers
│   └── api.ts                   # API service with axios
│
├── types/                       # TypeScript type definitions
│   └── note.ts                  # Note interface definitions
│
├── package.json                 # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── eslint.config.mjs           # ESLint configuration
├── next.config.ts              # Next.js configuration
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ and **npm** or **yarn**
- **Environment Variable**: API token for NoteHub service

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd 07-routing-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_NOTEHUB_TOKEN=your_api_token_here
   ```
   
   Get your API token from the [NoteHub API](https://notehub-public.goit.study/api)

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   
   Navigate to `http://localhost:3000`

## 📝 Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint for code quality
npm run lint
```

## 🗂️ Routing Structure

This project demonstrates advanced Next.js routing patterns:

### Dynamic Routes
- `/notes/[id]` - Individual note details
- `/notes/filter/[...slug]` - Optional catch-all for tag-based filtering

### Intercepting Routes
- `/notes/(.)notes/[id]` - Intercepts note detail to show in modal

### Route Groups
- `@modal` - Parallel route slot for modal functionality
- `@sidebar` - Parallel route slot for sidebar layout

### Layouts
- `/notes/filter/layout.tsx` - Layout with sidebar and main content

## 🔑 Key Components

### NoteForm
Handles note creation with form validation using Formik and Yup. Includes:
- Title input
- Content textarea
- Tag selection dropdown
- Submit handling with toast notifications

### NoteList
Displays paginated list of notes with:
- Search and filter functionality
- Delete action
- Modal preview integration
- Tag display

### Modal
Intercepting route modal for quick note preview:
- Shows note details in overlay
- Non-blocking navigation
- Close on backdrop click

### SearchBox
Debounced search input for optimized API calls

### Pagination
Reusable pagination component for navigating note lists

## 🔌 API Integration

The application uses the **NoteHub Public API** at `https://notehub-public.goit.study/api`

### API Endpoints

- `GET /notes` - Fetch notes with pagination, search, and filtering
- `POST /notes` - Create a new note
- `GET /notes/:id` - Fetch note details
- `DELETE /notes/:id` - Delete a note

### Query Parameters
- `page` - Page number (1-indexed)
- `perPage` - Items per page (default: 12)
- `search` - Search query string
- `tag` - Filter by note tag

## 🎨 Styling

The project uses **CSS Modules** for scoped, maintainable styling. Each component has its own `.module.css` file to prevent style conflicts and improve code organization.

## 🔐 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_NOTEHUB_TOKEN` | API authentication token | `Bearer eyJhbGc...` |

**Note:** Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

## 📱 Responsive Design

The application is fully responsive with layouts optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)

## 🧪 Development Best Practices

- **TypeScript** - All code is type-safe
- **Component-Based** - Reusable, modular components
- **Hooks** - Functional components with React hooks
- **State Management** - React Query for server state
- **Form Handling** - Formik + Yup for robust forms
- **Code Quality** - ESLint configured for consistent code style

## 🤝 Contributing

1. Create a new branch for your feature
2. Follow the existing code style (use ESLint)
3. Test your changes thoroughly
4. Submit a pull request

## 📄 License

This project is part of the GoIT curriculum.

## 🆘 Support

For issues or questions, please check:
1. The project's GitHub repository
2. Next.js [documentation](https://nextjs.org/docs)
3. React Query [documentation](https://tanstack.com/query/latest)

---

**Created with ❤️ using Next.js and React**

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
