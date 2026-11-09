# KahaniGhar

AI-powered, multilingual, interactive storytelling for children and families.
Built for the Great Indian AI Internship Challenge 2026 (Gnani.ai).

## Stack
Next.js (App Router) + TypeScript + Tailwind, Supabase (Postgres + Storage),
Gnani Prisma v2.5 (STT), Gnani Timbre v2.5 (TTS), and Groq (story LLM).

## Setup

1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```
2. Copy env template and fill values:
   ```bash
   cp .env.example .env.local
   ```
3. Create a Supabase project and run `supabase/migrations/0001_init.sql` in the SQL editor.
   Create private buckets `recordings` and `tts-cache`.
4. (Optional for Phase 0) Generate a Gnani API key at https://app.gnani.ai/voice.
5. Run the frontend dev server:
   ```bash
   npm run dev
   ```

### Run narration locally

The checked-in `.env.local` is configured with `NEXT_PUBLIC_API_URL=http://localhost:5000/api`.
That means story generation, Gnani narration, and audio files are served by the separate
Express backend; starting only the Next.js server cannot provide audio playback. In a second
terminal, start it before using **Listen**:

```bash
cd ../backend
npm run dev
```

The backend must have a reachable MongoDB instance plus `GNANI_API_KEY` and `GROQ_API_KEY` in
`backend/.env`. Confirm it is ready at `http://localhost:5000/health`. When using Google
sign-in, add `http://localhost:3100/auth/callback` to Supabase's redirect URLs.

## Phase 0 verification (real Gnani calls)

```bash
GNANI_API_KEY=xxx AUDIO_PATH=/path/to/clip.wav node scripts/test-gnani.mjs
```
Consumes credits. Verify `tts-test.wav` plays and the transcript looks right.

## Docs
See `docs/` (prd, architecture, design, phase, rules).

## Security notes
- All Gnani/LLM/Supabase-service calls are server-side only.
- Never commit `.env*`, recordings, or personal data.
