# Rooks Roofing Website

## Overview

This is a full-stack web application for a fictional roofing company called "Rooks Roofing." The application features a client-side React application with various pages showcasing the company's services, projects, testimonials, and a contact form. The server-side is built with Express and uses Drizzle ORM for database operations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack JavaScript architecture with the following components:

1. **Frontend**: React-based single-page application using modern React practices (hooks, functional components)
2. **Backend**: Express.js RESTful API server
3. **Database**: PostgreSQL database accessed through Drizzle ORM
4. **Styling**: Tailwind CSS with shadcn/ui component library 
5. **Routing**: Client-side routing with Wouter
6. **State Management**: React Query for server state management

The application follows a clear separation between client and server code:
- Client code resides in the `client` directory
- Server code resides in the `server` directory
- Shared code (like database schemas) resides in the `shared` directory

## Key Components

### Frontend Components

1. **Page Components**: Located in `client/src/pages`, these define the main routes of the application:
   - Home
   - Services
   - About
   - Gallery
   - Testimonials
   - Contact

2. **Section Components**: Located in `client/src/sections`, these are modular sections used within pages.

3. **UI Components**: Located in `client/src/components/ui`, these are reusable UI components from shadcn/ui.

4. **Layout Components**: Located in `client/src/layouts`, these define the common layout structure.

5. **Utility Components**: Custom reusable components for specific features like displaying testimonials, services, etc.

### Backend Components

1. **Express Server**: Main server setup in `server/index.ts`

2. **API Routes**: Defined in `server/routes.ts`, handling form submissions and data retrieval

3. **Storage Layer**: Defined in `server/storage.ts`, abstracts database operations

4. **Vite Development Server**: Integration with Vite for development in `server/vite.ts`

### Database Schema

The database schema is defined in `shared/schema.ts` using Drizzle ORM and includes:

1. **Users**: For authentication and admin access
2. **Contact Submissions**: Store customer inquiries 
3. **Testimonials**: Customer reviews and testimonials

## Data Flow

1. **Form Submission**:
   - User fills out a form (e.g., contact form)
   - React-Hook-Form validates the data using Zod schemas
   - Form data is sent to the server via React Query/fetch
   - Server validates the data again using Zod
   - Data is stored in the database via Drizzle ORM
   - Response is sent back to the client

2. **Data Fetching**:
   - Components request data through React Query hooks
   - Server retrieves data from the database
   - Data is returned to the client as JSON
   - Components render the data

## External Dependencies

### Frontend Libraries
- **React**: Core UI library
- **Wouter**: Lightweight routing library
- **React Query**: Data fetching and state management
- **React Hook Form**: Form handling
- **Zod**: Schema validation
- **shadcn/ui**: Component library
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library

### Backend Libraries
- **Express**: Web server framework
- **Drizzle ORM**: Database ORM
- **Drizzle Kit**: Schema migration tool
- **Zod**: Schema validation

## Deployment Strategy

The application is configured for deployment on Replit with automatic scaling:

1. **Build Process**:
   - Frontend: Vite builds the React application into static assets
   - Backend: ESBuild bundles the server code

2. **Startup Process**:
   - In development: Uses `npm run dev` to start both client and server with hot reloading
   - In production: Uses `npm run start` to serve the pre-built application

3. **Database Provisioning**:
   - The application expects a PostgreSQL database URL through the `DATABASE_URL` environment variable
   - Database schema is managed through Drizzle migrations

4. **Environment Variables**:
   - `DATABASE_URL`: PostgreSQL connection string
   - `NODE_ENV`: Controls development/production mode

## Development Workflow

1. Run local development server with `npm run dev`
2. Update database schema in `shared/schema.ts`
3. Apply schema changes with `npm run db:push`
4. Build for production with `npm run build`
5. Deploy to Replit with automatic scaling

## Architecture Decisions

1. **Drizzle ORM**: Chosen for its TypeScript-first approach and lightweight nature, making it ideal for a Replit environment where resources may be constrained.

2. **Wouter over React Router**: Selected for its smaller bundle size while maintaining a familiar API surface.

3. **shadcn/ui with Tailwind**: Preferred for the highly customizable component library that doesn't require additional build steps.

4. **Server-side input validation**: Implemented to ensure data integrity, even if client-side validation is bypassed.

5. **Memory Storage fallback**: The application includes an in-memory storage implementation, likely for development or when a database is not available.

6. **React Query**: Used for managing server state and data fetching to reduce boilerplate and provide caching, refetching, and error handling.