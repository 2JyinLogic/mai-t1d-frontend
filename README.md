# mai-t1d Frontend

This is the frontend application for the mai-t1d project.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server:

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

### Building for Production

To build the application for production:

```bash
npm run build
```

## Environment Variables

The following environment variables are available:

- `REACT_APP_ENVIRONMENT`: Current environment (development/production)
- `REACT_APP_API_BASE_URL`: Base URL for API calls
- `REACT_APP_API_GATEWAY_STAGE_NAME`: API Gateway stage name

## Deployment

This application is configured to be deployed using AWS Amplify. The deployment is automatically triggered when changes are pushed to the configured branches.

## Project Structure

```
src/
  ├── App.js          # Main application component
  ├── App.css         # Application styles
  ├── index.js        # Application entry point
  └── index.css       # Global styles
```
