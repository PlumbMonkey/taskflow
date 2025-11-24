# Supabase Setup Guide (Free Tier)

This guide walks you through setting up a free Supabase project for TaskFlow.

## Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up (free account)
2. Click **"New Project"**
3. Fill in:
   - **Project name**: `taskflow`
   - **Database password**: Create a strong password (save this!)
   - **Region**: Pick closest to you (e.g., `us-east-1`)
4. Click **"Create new project"**

⏳ Wait 2-3 minutes for project initialization...

## Step 2: Get Your Credentials

Once the project is ready:

1. Go to **Settings** (bottom left) → **API**
2. Copy these values:
   - **Project URL** (under "URL")
   - **anon public** key (under "Project API keys")

Example:
```
VITE_SUPABASE_URL=https://abc123def456.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## Step 3: Set Up Local Environment

1. In your project root, copy `.env.example` → `.env`:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and paste your credentials:
   ```
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```

3. Save the file

**Important:** Never commit `.env` to Git (it's in `.gitignore`)

## Step 4: Run Database Migrations

1. In Supabase dashboard, go to **SQL Editor**
2. Click **"New query"**
3. Open this file: `/supabase/migrations/001_initial_schema.sql`
4. Copy the **entire** SQL content
5. Paste into Supabase SQL Editor
6. Click **"Run"** (or press Ctrl+Enter)

✅ You should see: `Success. No rows returned`

## Step 5: Enable Realtime (Important!)

Real-time sync requires enabling Realtime for the `tasks` table:

1. Go to **Database** (left sidebar)
2. Click **"Replication"**
3. Under "Supabase Realtime", toggle **ON**
4. Check the box next to **`tasks`** table
5. Leave `boards` unchecked (optional; we mainly need tasks realtime)

✅ Realtime is now enabled!

## Step 6: Verify Setup

Test your credentials locally:

```bash
cd "d:\Dev Projects 2025\Real-Time Collaborative Task Board (Full-Stack SaaS)"
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

**Should see:**
- Login page loads ✓
- Can sign up with email/password ✓
- Supabase client connects (no errors in console) ✓

## Step 7: Seed Demo Data (Optional)

Create demo user + sample boards/tasks:

```bash
npm run seed
```

**This creates:**
- Demo user: `demo@taskflow.app` / `DemoPass123!`
- 2 sample boards
- 6 sample tasks

You can now log in and test drag-and-drop, real-time sync, etc.

---

## Troubleshooting

### "Connection refused" error
- Check VITE_SUPABASE_URL is correct (should be https://xxxx.supabase.co)
- Check VITE_SUPABASE_ANON_KEY is correct
- Make sure .env file exists in project root

### "RLS policy violation" when creating tasks
- Run the migration SQL again (Step 4)
- Verify all tables have RLS policies enabled
- Check that you're logged in with same user

### Real-time not working (tasks don't sync between tabs)
- Verify Realtime is enabled for `tasks` table (Step 5)
- Check console for WebSocket errors
- Try refreshing page

### "UNIQUE constraint violated" on sign up
- Email already exists in database
- Try different email address

---

## Free Tier Limits

Supabase free tier includes:
- ✅ 500MB database storage
- ✅ 2GB bandwidth/month
- ✅ Up to 10 connections
- ✅ Full Realtime support
- ✅ Row-Level Security (RLS)

For TaskFlow portfolio project, free tier is more than enough!

---

## Next Steps

1. ✅ Supabase project created
2. ✅ Database migrated
3. ✅ Realtime enabled
4. ⏭️ **Deploy to Vercel** (see VERCEL_SETUP.md)

---

## Helpful Links

- [Supabase Docs](https://supabase.com/docs)
- [SQL Editor Guide](https://supabase.com/docs/guides/database/sql-editor)
- [Realtime Guide](https://supabase.com/docs/guides/realtime)
- [Row-Level Security](https://supabase.com/docs/guides/auth/row-level-security)
