# Chat Agent Setup Guide

## Quick Start

Your portfolio chat agent powered by Google's Gemini AI needs a valid API key to work.

### Step 1: Get Your Free API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click **"Create API Key"**
4. Copy the generated key (starts with `AIza...`)

### Step 2: Configure Environment

1. Open the `.env.local` file in your project root
2. Add or update this line:
   ```
   GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_here
   ```
3. Save the file

### Step 3: Restart Server

```bash
# Stop the current dev server (Ctrl+C)
npm run dev
```

The chat agent should now work! 🎉

---

## Troubleshooting

### Agent Returns Empty Responses

**Cause**: Invalid or missing API key

**Solution**:
- Verify your API key is correctly set in `.env.local`
- Generate a new API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
- Ensure there are no extra spaces or quotes around the key

### Error: "API quota exceeded"

**Cause**: You've hit the free tier limits

**Solutions**:
- Wait until your quota resets (usually daily)
- Upgrade to a paid plan in Google Cloud Console
- Create a new project with a fresh API key

### Error: "API key not configured"

**Cause**: The `.env.local` file is missing or incorrectly formatted

**Solution**:
1. Create `.env.local` in your project root if it doesn't exist
2. Add the line: `GOOGLE_GENERATIVE_AI_API_KEY=your_key_here`
3. Restart your dev server

---

## Security Best Practices

> [!WARNING]
> **Never commit `.env.local` to Git!** It contains sensitive API keys.

✅ **Do**:
- Keep API keys in `.env.local` (already in `.gitignore`)
- Use environment variables for all secrets
- Regenerate keys if accidentally exposed

❌ **Don't**:
- Hardcode API keys in source code
- Share API keys publicly
- Commit `.env.local` to version control

---

## Testing Your Setup

Run this test command to verify everything works:

```bash
node test-agent.mjs
```

**Expected output**:
- Status: 200
- Response time: < 2 seconds
- Content: Ahmad's AI Twin introduction

---

## API Key Limits (Free Tier)

- **Requests**: 60 requests per minute
- **Characters**: ~32,000 characters per minute
- **Daily**: Generous quota for personal projects

For production use with high traffic, consider upgrading to a paid plan.

---

## Need Help?

If you're still experiencing issues:

1. Check the browser console (F12) for detailed error messages
2. Verify your API key is active in [Google AI Studio](https://makersuite.google.com/app/apikey)
3. Ensure your network allows connections to Google's API endpoints
