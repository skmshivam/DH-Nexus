# 🚀 Quick Start: Automatic Social Feed

## Your site now automatically fetches Instagram & LinkedIn posts!

### ⚡ Quick Setup (15 minutes)

#### 1️⃣ Get Instagram Token
1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create an app → Add "Instagram Basic Display"
3. Generate access token
4. Copy: **Access Token** + **User ID**

#### 2️⃣ Get LinkedIn Token  
1. Go to [LinkedIn Developers](https://www.linkedin.com/developers/)
2. Create an app → Request API access
3. Generate OAuth token
4. Copy: **Access Token**

#### 3️⃣ Deploy to Vercel
```bash
vercel
```

#### 4️⃣ Add Environment Variables in Vercel Dashboard
```
INSTAGRAM_ACCESS_TOKEN=your_token
INSTAGRAM_USER_ID=your_user_id
LINKEDIN_ACCESS_TOKEN=your_token
```

#### 5️⃣ Done! 🎉
Your posts now auto-update every 30 minutes!

---

## 📖 Full Instructions
See `/SOCIAL_API_SETUP_GUIDE.md` for detailed step-by-step guide

---

## ✨ Features
- ✅ Auto-fetches posts every 30 minutes
- ✅ Manual refresh button
- ✅ Shows real likes/comments
- ✅ Links to actual posts
- ✅ Loading states & error handling
- ✅ Falls back to cached posts if API fails

---

## 🔧 Update Later
Just post on Instagram or LinkedIn - it appears automatically! 

Refresh tokens every 60 days (calendar reminder recommended).
