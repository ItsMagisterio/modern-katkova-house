# Каткова Хауз - Hotel Website

## Overview

A marketing website for "Каткова Хауз" (Katkova House), a hotel located in Katkova Shchel village, Lazarevsky district, Sochi, Russia. The site showcases hotel rooms (Lux and Economy categories), amenities, contact information, and booking options. It's a single-page application with sections for hero, rooms, amenities, and contact details.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Stack
- **React 18** with TypeScript for component-based UI development
- **Vite** as the build tool and development server (configured on port 5000)
- **Tailwind CSS** for utility-first styling with custom CSS variables for theming
- **shadcn/ui** component library built on Radix UI primitives for accessible UI components

### Project Structure
- `/src/pages/` - Page components (Index, NotFound)
- `/src/components/sections/` - Major page sections (Hero, Rooms, Amenities, Contact)
- `/src/components/layout/` - Layout components (Header, Footer)
- `/src/components/ui/` - Reusable UI components from shadcn/ui
- `/src/hooks/` - Custom React hooks (use-mobile, use-toast)
- `/src/lib/` - Utility functions (cn for className merging)
- `/src/assets/` - Static assets (images)

### Routing
- Uses React Router v6 with BrowserRouter
- Single main route (`/`) rendering the Index page
- Catch-all route for 404 handling

### Styling Approach
- CSS variables defined in `src/index.css` for theming (colors, gradients, glass effects)
- Montserrat font family as primary typography
- Custom glass-morphism effects and gradient utilities
- Dark mode support via class-based toggling

### State Management
- React Query (`@tanstack/react-query`) configured for data fetching (currently unused but ready)
- Local component state for UI interactions

### Component Patterns
- Path aliases configured (`@/` maps to `src/`)
- Class variance authority (CVA) for component variants
- Radix UI primitives for accessible interactive components

## External Dependencies

### UI Framework
- **Radix UI** - Complete set of accessible component primitives (dialog, dropdown, tabs, toast, etc.)
- **Lucide React** - Icon library
- **Embla Carousel** - Carousel/slider functionality
- **Vaul** - Drawer component
- **cmdk** - Command palette component
- **Sonner** - Toast notifications

### Form Handling
- **React Hook Form** with `@hookform/resolvers` for form validation
- **Zod** (implied by resolvers) for schema validation

### Date Handling
- **date-fns** - Date utility library
- **react-day-picker** - Calendar/date picker component

### Theming
- **next-themes** - Theme switching support

### Development Tools
- **TypeScript** with relaxed strict settings
- **ESLint** with React hooks and refresh plugins
- **Lovable Tagger** - Development component tagging (dev mode only)

### No Backend Currently
- This is a static frontend application
- No database or API integrations
- Contact information displayed directly (phone, email, address)
- Booking is handled via phone/email contact