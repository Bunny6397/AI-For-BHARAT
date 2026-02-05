# VitaLens Backend Setup

## Installation

1. Install backend dependencies:
```bash
npm install express cors
npm install -D nodemon
```

2. Start the backend server:
```bash
node server.js
```

Or for development with auto-reload:
```bash
npx nodemon server.js
```

## API Endpoints

### POST /api/contact
Submit contact form
- Body: `{ firstName, lastName, email, subject, message }`
- Response: `{ success: true, message: "..." }`

### POST /api/newsletter
Subscribe to newsletter
- Body: `{ email }`
- Response: `{ success: true, message: "..." }`

### GET /api/health
Health check endpoint
- Response: `{ status: "ok", timestamp: "..." }`

## Running Both Frontend and Backend

Terminal 1 (Frontend):
```bash
npm run dev
```

Terminal 2 (Backend):
```bash
node server.js
```

Frontend: http://localhost:5173
Backend: http://localhost:5000
