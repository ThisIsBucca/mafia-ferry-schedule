# Mafia Island Ferry Service

A React-based web application for managing and displaying ferry schedules for Mafia Island.

## Project Structure

```
boat-schedule/
├── public/                  # Static files
│   ├── index.html          # Main HTML file
│   └── .htaccess           # Apache server configuration
│
├── src/                    # Source files
│   ├── components/         # Reusable React components
│   ├── contexts/          # React context providers
│   ├── data/              # Data files and constants
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions and libraries
│   ├── pages/             # Page components
│   ├── styles/            # CSS and styling files
│   ├── translations/      # Internationalization files
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # Application entry point
│   └── router.jsx         # React Router configuration
│
├── vite.config.js         # Vite build configuration
├── vercel.json            # Vercel deployment configuration
└── package.json           # Project dependencies and scripts
```

## Technologies Used

- React
- Vite
- React Query
- React Router
- Tailwind CSS

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Deployment

The project is configured for deployment on Vercel with the following settings:

- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

### Vercel Configuration Details

The `vercel.json` file includes:

1. **Build Configuration**
   - Explicit Vercel version (2)
   - Vite build tool configuration
   - Output directory specification

2. **Routing Rules**
   - Static assets caching (1 year)
   - SPA fallback to index.html
   - Client-side routing support

3. **Security Headers**
   - X-Frame-Options: Prevents clickjacking
   - X-Content-Type-Options: Prevents MIME type sniffing
   - Referrer-Policy: Controls referrer information

## Configuration Files

### vite.config.js
- Entry point: `src/main.jsx`
- Output directory: `dist`
- Assets directory: `assets`
- Base path: `/`

### vercel.json
- Vercel platform version
- Build and deployment settings
- Routing and caching rules
- Security headers configuration

### .htaccess
- MIME type configurations
- Cache control settings
- HTTPS redirection

## Development

The project uses:
- ES modules
- JSX syntax
- Modern JavaScript features
- CSS modules for styling

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request 