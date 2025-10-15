# remix-ai-agent-netlify

A product launch page built with the Remix JavaScript framework.

## Overview

This is a single-page website showcasing a product launch page with:
- Hero section with product name and tagline
- Engaging product description
- Call-to-action button
- Key features section highlighting 4 main product features
- Pricing information with special launch price

## Screenshots

![Product Launch Page](https://github.com/user-attachments/assets/d0c5e6c5-45f4-4339-abd1-de08797a959a)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v10 or higher)

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Production Build

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Technology Stack

- **Remix** - Full-stack web framework
- **React** - UI library
- **Vite** - Build tool and dev server
- **Node.js** - Server runtime

## Project Structure

```
remix-ai-agent-netlify/
├── app/
│   ├── routes/
│   │   └── _index.jsx      # Main product launch page
│   ├── entry.client.jsx    # Client entry point
│   ├── entry.server.jsx    # Server entry point
│   └── root.jsx            # Root component
├── public/                 # Static assets
├── vite.config.js         # Vite configuration
└── package.json           # Project dependencies
```

## Deployment

This project is configured to deploy on Netlify using Netlify Functions for server-side rendering.

### Netlify Configuration

The project uses:
- **@remix-run/netlify** - Adapter for Netlify Functions
- **netlify.toml** - Netlify configuration file
- **netlify/functions/server.js** - Netlify Function handler for SSR

### How it works

1. Build process generates:
   - Client-side assets in `build/client`
   - Server bundle in `build/server`
2. All requests are routed through the Netlify Function at `/.netlify/functions/server`
3. The function uses Remix's server-side rendering to generate HTML responses

### Deploying to Netlify

1. Connect your repository to Netlify
2. Netlify will automatically detect the configuration from `netlify.toml`
3. The build command (`npm run build`) will be executed
4. Your application will be deployed with full SSR support

## License

ISC