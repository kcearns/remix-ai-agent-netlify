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

This project is configured to work with Netlify. Simply connect your repository to Netlify and it will automatically detect the Remix configuration and deploy your application.

## License

ISC