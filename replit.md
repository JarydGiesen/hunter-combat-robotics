# Hunter Combat Robotics League - replit.md

## Overview

This is a full-stack web application for the Hunter Combat Robotics League, a community platform for combat robotics enthusiasts. The application serves as the main website showcasing the league, providing information about events, rules, and facilitating community engagement through Discord integration.

## System Architecture

The application follows a modern full-stack architecture with clear separation between client and server components:

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter for client-side navigation
- **Styling**: Tailwind CSS with custom design system using brand colors
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript throughout the stack
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Development**: In-memory storage fallback for development

## Key Components

### Client-Side Pages
- **Home**: Landing page with hero section, about, events, and community features
- **Getting Started**: Comprehensive guide for new builders
- **Next Event**: Detailed information about upcoming tournaments
- **Rules**: Competition rules and weight class specifications
- **FAQ**: Frequently asked questions with collapsible sections
- **Discord**: Community platform integration and channel information

### Shared Components
- **Navigation**: Responsive navigation with mobile sheet menu
- **UI Components**: Comprehensive set of reusable components (buttons, cards, dialogs, etc.)
- **Custom Sections**: Hero, about, events, FAQ, Discord integration sections

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Scalable Design**: Schema designed to accommodate future features like event registration, robot profiles, and competition results

## Data Flow

1. **Static Content**: Most content is statically served through React components
2. **User Management**: Prepared infrastructure for user authentication and registration
3. **Event Information**: Currently static but designed for dynamic content management
4. **Community Features**: Discord integration for real-time community engagement

## External Dependencies

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Headless UI components for accessibility
- **Lucide React**: Icon library for consistent iconography

### Development and Build
- **Vite**: Fast build tool with HMR and optimization
- **TypeScript**: Type safety across the entire stack
- **ESBuild**: Fast JavaScript bundler for production builds

### Database and Backend
- **Drizzle ORM**: Type-safe database operations
- **Neon Database**: Serverless PostgreSQL provider
- **Express.js**: Web application framework

## Deployment Strategy

The application is configured for deployment on Replit with:

- **Development**: `npm run dev` - Runs both client and server with hot reload
- **Production Build**: `npm run build` - Creates optimized client bundle and server build
- **Production Start**: `npm run start` - Serves the built application
- **Database**: Uses environment variable `DATABASE_URL` for PostgreSQL connection
- **Static Assets**: Client files served from `dist/public` directory
- **Port Configuration**: Server runs on port 5000 with external port 80

The build process creates a single deployable package with the React frontend bundled and the Express server compiled for production use.

## Changelog

```
Changelog:
- July 1, 2025. Converted to single-page website
- July 1, 2025. Added competition classes and rules sections
- July 1, 2025. Updated navigation to use smooth scrolling anchors
- June 24, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```