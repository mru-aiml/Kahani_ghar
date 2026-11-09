# KahaniGhar

The project is split into two independently runnable applications:

- `frontend/` — Next.js client, served at `http://localhost:3100`
- `backend/` — Express API, served at `http://localhost:5000`

Open two terminals to run the full application:

```bash
cd frontend
npm install
npm run dev
```

```bash
cd backend
npm install
npm run dev
```

The frontend environment file (`frontend/.env.local`) already points to
`http://localhost:5000/api`.
