# KahaniGhar backend

Express + MongoDB API for the Next.js frontend. It stores stories and STT metadata in MongoDB, sends audio to Gnani Prisma, generates narration with Gnani Timbre, and uses Groq for story generation.

## Run locally

1. Start MongoDB locally, or create a MongoDB Atlas database.
2. Copy `.env.example` to `.env` and provide `MONGODB_URI`, `GNANI_API_KEY`, and `GROQ_API_KEY`.
3. Run `npm install` and `npm run dev` from this folder.
4. In `../frontend`, copy `.env.example` to `.env.local` and keep `NEXT_PUBLIC_API_URL=http://localhost:5000/api` and `NEXT_PUBLIC_SERVICE_MODE=api`.
5. Start the frontend with `npm run dev` from the `frontend` folder.

The browser uses one development owner (`DEMO_USER_ID`) until real login is implemented. Replace `src/middleware/auth.js` with JWT/session verification before deployment.

Gnani Prisma v2.5 and Timbre v2.5 remain the STT/TTS providers. Groq is used only for story text generation; disclose all three services accurately in any challenge submission or demo.

## Google authentication

KahaniGhar uses Supabase Auth for Google sign-in. In Supabase, enable the Google provider and add `http://localhost:3100/auth/callback` to **Authentication → URL Configuration → Redirect URLs**. Configure the Google OAuth client ID and secret in **Authentication → Providers → Google**.

Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in the root `.env.local`. Set the matching `SUPABASE_URL` and `SUPABASE_ANON_KEY` in `backend/.env`, then set `ALLOW_DEMO_AUTH=false`. The frontend sends the signed-in user's access token to the backend, and the backend verifies it with Supabase before using the user ID as the MongoDB ownership key.

## API

- `GET, POST /api/stories`
- `GET, DELETE /api/stories/:id`
- `POST /api/stories/:id/branch`
- `POST /api/stt` (`multipart/form-data`, field `audio_file`)
- `POST /api/tts` (`storyId`, `sceneIndex`, `voice`, optional `language`)
- `GET /health`
