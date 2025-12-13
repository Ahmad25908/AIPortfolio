# Email Debugging Guide

## Issue: Email not sending

### Step 1: Create .env.local file

**IMPORTANT:** The file must be in the ROOT folder, not in `src/`

**Location:** `c:\Users\123\Desktop\Portfolio\.env.local`

**Content:**
```
RESEND_API_KEY=re_f8XBYFXX_JA8ZBgwrgxtEa6qdrod4SxAf
```

### Step 2: Verify Resend API Key

1. Go to https://resend.com/api-keys
2. Check if the API key `re_f8XBYFXX_JA8ZBgwrgxtEa6qdrod4SxAf` is valid
3. Make sure it's not expired or revoked

### Step 3: Restart Dev Server

After creating `.env.local`:
```bash
# Stop current server (Ctrl+C)
npm run dev
```

### Step 4: Test the Form

1. Open http://localhost:3000
2. Scroll to Contact Section
3. Fill out the form:
   - Name: Test User
   - Email: test@example.com
   - Budget: $3k–$8k
   - Project: Test message
4. Click "Send Message & Book Call"
5. Check browser console (F12) for errors

### Step 5: Check Server Logs

Look for these messages in terminal:
- ✅ "Message sent successfully" 
- ❌ "RESEND_API_KEY not found"
- ❌ "Resend error:"

### Alternative: Use EmailJS Instead

If Resend doesn't work, I can switch to EmailJS which requires no API key setup.

### Quick Test: Direct Contact Methods

Even if email form doesn't work, these work instantly:
- WhatsApp: https://wa.me/923244109392
- Email: ahmadhassan41093@gmail.com
- Phone: +92 324 4109392
- Calendly: https://calendly.com/ahmadhassan41093/15min

---

**Next Steps:**
1. Create `.env.local` in root folder with API key
2. Restart server
3. Test form
4. Let me know what error you see
