# REA Boxing Site

Full-stack application with Express TypeScript backend and Angular frontend.


```

## Setup

### Install all dependencies:
```bash
npm run install:all
```

Or install separately:
```bash
# Backend
cd backend
npm install

# Frontend
cd frontend
npm install
```

## Development

### Run both frontend and backend concurrently:
```bash
npm run dev
```

### Run separately:
```bash
# Backend (runs on http://localhost:3000)
npm run dev:backend

# Frontend (runs on http://localhost:4200)
npm run dev:frontend
```

## Build

```bash
npm run build
```

## Docker

### Run with Docker Compose:
```bash
docker-compose up
```

### Build and run in detached mode:
```bash
docker-compose up -d --build
```

### Stop containers:
```bash
docker-compose down
```

The services will be available at:
- Backend: http://localhost:3000
- Frontend: http://localhost:4200

## API Endpoints

- `GET /api/health` - Health check
- `GET /api` - Welcome message

## Environment Variables

Backend `.env` file:
```
PORT=3000
NODE_ENV=development
```
