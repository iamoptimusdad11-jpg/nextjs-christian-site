# Nextjs Christian Site

A starter Next.js + Tailwind site with:

- Home page with a daily Scripture-of-the-Day banner
- Blog index + post pages
- Chatbot API route (proxy to OpenAI)

## Quick start

1. Install dependencies:
   ```bash
   npm install
   ```
2. Add Tailwind (if you haven't):
   ```bash
   npx tailwindcss init -p
   ```
3. Add environment variables (for the chat API):
   - `OPENAI_API_KEY`

4. Run dev:
   ```bash
   npm run dev
   ```

5. Deploy: push to GitHub and connect to Vercel, set env vars in Vercel dashboard.
