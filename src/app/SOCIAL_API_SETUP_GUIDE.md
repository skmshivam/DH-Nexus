# 🚀 Automatic Social Media Feed Setup Guide

This guide will help you set up **automatic fetching** of your LinkedIn and Instagram posts so they appear on your website in real-time!

---

## 📋 Overview

Your DH Nexus platform now has:
- ✅ **Automatic post fetching** from LinkedIn and Instagram APIs
- ✅ **Auto-refresh** every 30 minutes
- ✅ **Manual refresh button** for instant updates
- ✅ **Fallback posts** if API is unavailable
- ✅ **Loading states** and error handling

---

## 🎯 Quick Start (3 Steps)

1. **Get API Access** from LinkedIn and Instagram
2. **Deploy API endpoint** to Vercel/Netlify
3. **Add environment variables** with your API tokens

---

## 📱 Part 1: Instagram API Setup

### Step 1: Create a Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click **"My Apps"** → **"Create App"**
3. Choose **"Business"** as app type
4. Fill in app details:
   - **App Name**: "DH Nexus Social Feed"
   - **App Contact Email**: Your email
   - **Business Account**: Select or create one

### Step 2: Add Instagram Basic Display

1. In your app dashboard, click **"Add Product"**
2. Find **"Instagram Basic Display"** and click **"Set Up"**
3. Click **"Create New App"** in Instagram Basic Display settings
4. Accept the terms

### Step 3: Configure Instagram App

1. Go to **Basic Display** → **"Basic Display"** tab
2. Add these URLs:
   - **Valid OAuth Redirect URIs**: 
     ```
     https://your-domain.com/
     https://localhost:3000/
     ```
   - **Deauthorize Callback URL**: `https://your-domain.com/`
   - **Data Deletion Request URL**: `https://your-domain.com/`

3. Save changes

### Step 4: Add Instagram Tester

1. Scroll down to **"User Token Generator"**
2. Click **"Add Instagram Testers"**
3. Add your Instagram account username
4. Go to your Instagram app settings (on Instagram mobile/web)
5. Navigate to **Settings** → **Apps and Websites** → **Tester Invites**
6. Accept the invite

### Step 5: Generate Access Token

1. Back in Facebook Developers, go to **"User Token Generator"**
2. Click **"Generate Token"** next to your Instagram account
3. Log in to Instagram and authorize
4. **Copy the Access Token** - you'll need this!
5. Also copy your **Instagram User ID** shown there

### Step 6: Get Long-Lived Access Token

Your token expires in 1 hour by default. Get a long-lived token (60 days):

```bash
curl -i -X GET "https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=YOUR_APP_SECRET&access_token=YOUR_SHORT_LIVED_TOKEN"
```

Replace:
- `YOUR_APP_SECRET`: From Facebook App Dashboard → Settings → Basic
- `YOUR_SHORT_LIVED_TOKEN`: The token you just generated

Response will include `access_token` (60-day token) - **Save this!**

### 📝 Instagram Credentials You Need:
- ✅ `INSTAGRAM_ACCESS_TOKEN` (long-lived token)
- ✅ `INSTAGRAM_USER_ID` (from User Token Generator)

---

## 💼 Part 2: LinkedIn API Setup

### Step 1: Create LinkedIn App

1. Go to [LinkedIn Developers](https://www.linkedin.com/developers/apps)
2. Click **"Create app"**
3. Fill in the form:
   - **App name**: "DH Nexus Social Feed"
   - **LinkedIn Page**: Select "DH Nexus" company page
   - **App logo**: Upload DH Nexus logo
   - **Legal agreement**: Accept terms
4. Click **"Create app"**

### Step 2: Get LinkedIn Page ID

1. In your app, go to the **"Settings"** tab
2. Scroll to **"App settings"**
3. Note your **Company/Organization ID** - this is your page URN

Alternatively:
1. Go to your LinkedIn company page
2. Look at the URL: `linkedin.com/company/dh-nexus/`
3. The ID is the number after `/company/` or the slug `dh-nexus`

### Step 3: Request API Access

1. In your app, go to **"Products"** tab
2. Request access to:
   - ✅ **"Share on LinkedIn"**
   - ✅ **"Sign In with LinkedIn"**
3. Fill out the use case (explain it's for showing posts on your website)
4. Wait for approval (usually instant for basic access)

### Step 4: Generate Access Token

**Method 1: Using OAuth 2.0 Tools**

1. Go to [LinkedIn OAuth 2.0 Tools](https://www.linkedin.com/developers/tools/oauth)
2. Select your app
3. Select scopes:
   - `r_liteprofile`
   - `r_basicprofile`  
   - `w_member_social`
   - `r_organization_social`
4. Click **"Request access token"**
5. **Copy the token** - you'll need this!

**Method 2: Manual OAuth Flow**

1. Get your **Client ID** and **Client Secret** from app Settings
2. Authorize:
   ```
   https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=r_liteprofile%20r_organization_social%20w_member_social
   ```
3. Get the authorization code from redirect
4. Exchange for access token:
   ```bash
   curl -X POST https://www.linkedin.com/oauth/v2/accessToken \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=authorization_code" \
     -d "code=YOUR_AUTH_CODE" \
     -d "redirect_uri=YOUR_REDIRECT_URI" \
     -d "client_id=YOUR_CLIENT_ID" \
     -d "client_secret=YOUR_CLIENT_SECRET"
   ```

### 📝 LinkedIn Credentials You Need:
- ✅ `LINKEDIN_ACCESS_TOKEN` (OAuth token)
- ✅ LinkedIn Organization/Person URN (from your profile)

**Note:** LinkedIn access tokens expire after 60 days. You'll need to refresh them periodically.

---

## 🌐 Part 3: Deploy API Endpoint

You have 2 options: **Vercel** (recommended) or **Netlify**

### Option A: Deploy to Vercel (Recommended)

#### 1. Install Vercel CLI
```bash
npm install -g vercel
```

#### 2. Login to Vercel
```bash
vercel login
```

#### 3. Deploy Your Project
```bash
cd your-project-folder
vercel
```

Follow the prompts:
- Link to existing project? **No**
- What's your project name? **dh-nexus**
- In which directory is your code located? **. (current)**
- Auto-detect settings? **Yes**

#### 4. Add Environment Variables

Go to [Vercel Dashboard](https://vercel.com/dashboard)
1. Select your **dh-nexus** project
2. Go to **Settings** → **Environment Variables**
3. Add these variables:

```env
LINKEDIN_ACCESS_TOKEN=your_linkedin_token_here
INSTAGRAM_ACCESS_TOKEN=your_instagram_token_here
INSTAGRAM_USER_ID=your_instagram_user_id_here
```

4. Click **"Save"**
5. Go to **Deployments** → Redeploy the latest deployment

#### 5. Your API is Live! 🎉

Your API endpoint will be:
```
https://your-project.vercel.app/api/social-posts
```

---

### Option B: Deploy to Netlify

#### 1. Prepare Netlify Function

Move the API file:
```bash
mkdir -p netlify/functions
mv api/social-posts.ts netlify/functions/social-posts.js
```

Convert to Netlify format (the file already exports the right handler)

#### 2. Create `netlify.toml`

Create a file called `netlify.toml` in your project root:

```toml
[build]
  functions = "netlify/functions"
  publish = "dist"

[functions]
  node_bundler = "esbuild"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200
```

#### 3. Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

#### 4. Add Environment Variables

1. Go to [Netlify Dashboard](https://app.netlify.com/)
2. Select your site
3. Go to **Site settings** → **Environment variables**
4. Add these variables:

```env
LINKEDIN_ACCESS_TOKEN=your_linkedin_token_here
INSTAGRAM_ACCESS_TOKEN=your_instagram_token_here  
INSTAGRAM_USER_ID=your_instagram_user_id_here
```

5. **Trigger a new deploy** to apply changes

#### 5. Your API is Live! 🎉

Your API endpoint will be:
```
https://your-site.netlify.app/api/social-posts
```

---

## 🔧 Part 4: Update Frontend Configuration

### Update API Endpoint URL

Open `/hooks/useSocialPosts.ts` and update the API URL:

```typescript
// Change this line (around line 37):
const response = await fetch('/api/social-posts', {

// To your actual deployed URL:
const response = await fetch('https://your-project.vercel.app/api/social-posts', {
```

**Or** if deploying to the same domain, keep it as `/api/social-posts`

---

## ✅ Testing Your Setup

### Test the API Endpoint

```bash
curl https://your-project.vercel.app/api/social-posts
```

You should see JSON response with your posts:

```json
{
  "posts": [
    {
      "platform": "instagram",
      "id": "123456",
      "url": "https://instagram.com/p/...",
      "content": "Your post caption",
      "image": "https://...",
      "date": "2025-01-13",
      "likes": 45,
      "comments": 12
    }
  ],
  "lastUpdated": "2025-01-13T10:30:00.000Z"
}
```

### Test on Your Website

1. Go to your DH Nexus homepage
2. Scroll to the **"Follow Our Journey"** section
3. You should see your real posts!
4. Click the **"Refresh"** button to manually fetch new posts
5. Posts auto-refresh every 30 minutes

---

## 🔄 Maintaining Your Feed

### Refreshing Tokens

**Instagram:**
- Long-lived tokens last **60 days**
- Refresh before expiration:
  ```bash
  curl -i -X GET "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=YOUR_TOKEN"
  ```
- Update the new token in Vercel/Netlify environment variables

**LinkedIn:**
- Tokens last **60 days**
- Re-authenticate using the OAuth flow before expiration
- Update the new token in environment variables

### Set Up Token Refresh Reminders

Add calendar reminders to refresh tokens every **50 days** (before they expire).

---

## 🐛 Troubleshooting

### Issue: "Failed to fetch posts"

**Check:**
1. ✅ Are environment variables set correctly in Vercel/Netlify?
2. ✅ Are tokens still valid? (not expired)
3. ✅ Is the API endpoint URL correct in `/hooks/useSocialPosts.ts`?
4. ✅ Check browser console for errors (F12)

### Issue: Instagram posts not showing

**Check:**
1. ✅ Is your Instagram account a **Business** or **Creator** account?
2. ✅ Did you accept the tester invite in Instagram settings?
3. ✅ Is the access token long-lived (60 days)?
4. ✅ Is `INSTAGRAM_USER_ID` correct?

### Issue: LinkedIn posts not showing

**Check:**
1. ✅ Did you get API access approval for "Share on LinkedIn"?
2. ✅ Are you using the correct organization URN?
3. ✅ Does the token have the right scopes? (`r_organization_social`)
4. ✅ Is it a company page post or personal post? (code needs adjustment for personal)

### Issue: CORS errors

**Solution:**
The API endpoint includes CORS headers. If you still get CORS errors:
1. Make sure you're calling from the same domain
2. Or update CORS headers in `/api/social-posts.ts` line 109

---

## 🎨 Customization

### Change Refresh Interval

Edit `/hooks/useSocialPosts.ts` line 22:

```typescript
// Change from 30 minutes to 1 hour:
const interval = setInterval(fetchSocialPosts, 60 * 60 * 1000);
```

### Change Number of Posts Displayed

Edit `/api/social-posts.ts` line 166:

```typescript
// Change from 8 to 12 posts:
posts: allPosts.slice(0, 12),
```

### Filter Specific Post Types

Edit `/api/social-posts.ts` line 120 to filter Instagram media types (already filters out videos).

---

## 📊 What Gets Displayed

For each post, the system shows:
- ✅ Platform badge (LinkedIn/Instagram)
- ✅ Post image/thumbnail
- ✅ Caption text (truncated to 3 lines)
- ✅ Like count
- ✅ Comment count
- ✅ Post date
- ✅ Direct link to view full post

---

## 🚨 Important Notes

### Rate Limits

- **Instagram**: 200 requests/hour (Basic Display API)
- **LinkedIn**: Varies by API product (typically 500 requests/day)

Our system fetches every 30 minutes = **48 requests/day**, well within limits!

### Data Privacy

- Your API tokens are stored securely as **environment variables**
- Never commit tokens to Git
- Tokens are only used server-side in the API endpoint
- No sensitive data is exposed to the frontend

### Content Moderation

The system displays your posts as-is. Make sure:
- Posts are professional and appropriate
- Images meet quality standards
- Captions are proofread

---

## 🎉 You're Done!

Once set up, your social feed will:
- ✅ **Automatically fetch** new posts every 30 minutes
- ✅ **Display real content** from LinkedIn and Instagram
- ✅ **Link directly** to your actual posts
- ✅ **Show accurate** engagement stats (likes, comments)
- ✅ **Refresh on demand** with the refresh button

Your visitors will always see your **latest updates** from social media! 🚀

---

## 💡 Need Help?

- Instagram API Docs: https://developers.facebook.com/docs/instagram-basic-display-api
- LinkedIn API Docs: https://learn.microsoft.com/en-us/linkedin/
- Vercel Docs: https://vercel.com/docs
- Netlify Functions: https://docs.netlify.com/functions/overview/

---

**Happy posting! 📱✨**
