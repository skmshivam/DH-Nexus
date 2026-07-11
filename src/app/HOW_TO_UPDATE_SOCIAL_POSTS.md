# How to Update Social Media Posts on DH Nexus

## Quick Guide to Adding New Posts

The social media feed on your homepage displays **real posts** from your LinkedIn and Instagram accounts. Here's how to update them:

---

## Step 1: Open the File

Navigate to: `/components/SocialFeed.tsx`

Look for the `realPosts` array at the top of the file (around line 3-40).

---

## Step 2: Add Your New Post

Add a new post object to the beginning of the array:

```typescript
const realPosts = [
  // ⬇️ ADD NEW POST HERE (at the top for most recent)
  {
    platform: 'linkedin',  // or 'instagram' or 'twitter'
    url: 'YOUR_POST_URL',  // Full URL to your actual post
    content: 'Your post caption or description',
    image: 'IMAGE_URL',    // Use Unsplash or your actual post image URL
    date: '2025-01-15',    // YYYY-MM-DD format
    likes: 50,             // Approximate number
    comments: 10           // Approximate number
  },
  // ... existing posts below
];
```

---

## Step 3: Get the Post URL

### For LinkedIn:
1. Go to your LinkedIn post
2. Click the three dots (•••) in the top right of the post
3. Select "Copy link to post"
4. Paste it in the `url` field

**Example LinkedIn URL:**
```
https://www.linkedin.com/feed/update/urn:li:activity:7415898776092950528
```

### For Instagram:
1. Go to your Instagram post
2. Click the three dots (•••)
3. Select "Copy link"
4. Paste it in the `url` field

**Example Instagram URL:**
```
https://www.instagram.com/p/ABC123xyz/
```

---

## Step 4: Add Post Image

You have 2 options:

### Option A: Use Unsplash (Quick & Easy)
Use any relevant image from Unsplash:
```typescript
image: 'https://images.unsplash.com/photo-XXXXXXXXXX?w=800'
```

### Option B: Use Your Actual Post Image
1. Download your post image from LinkedIn/Instagram
2. Upload it to an image hosting service (like Imgur, Cloudinary)
3. Use the direct image URL

---

## Step 5: Fill in the Details

```typescript
{
  platform: 'linkedin',                           // Platform name
  url: 'https://www.linkedin.com/...',           // Direct link to post
  content: 'Your actual post caption here...',   // Copy from your post
  image: 'https://images.unsplash.com/...',      // Post image
  date: '2025-01-13',                            // Post date (YYYY-MM-DD)
  likes: 45,                                      // Approximate likes
  comments: 12                                    // Approximate comments
}
```

---

## Complete Example

```typescript
const realPosts = [
  {
    platform: 'linkedin',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7415898776092950528',
    content: 'Excited to announce the launch of DH Nexus - a comprehensive platform connecting Digital Humanities talent with industry opportunities! 🚀',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
    date: '2025-01-13',
    likes: 45,
    comments: 12
  },
  {
    platform: 'instagram',
    url: 'https://www.instagram.com/p/C2xYzAbcd/',
    content: 'Building bridges between academia and industry in Digital Humanities. Join our growing community! 🌐',
    image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800',
    date: '2025-01-12',
    likes: 89,
    comments: 23
  }
  // ... more posts
];
```

---

## Tips for Best Results

✅ **Keep 4-6 posts** - Remove old posts to keep the feed fresh  
✅ **Add newest posts first** - Put most recent posts at the top of the array  
✅ **Update regularly** - Refresh every time you post on social media  
✅ **Use high-quality images** - 800px width works great  
✅ **Copy exact captions** - Use your actual post text for authenticity  
✅ **Update stats occasionally** - Check back and update likes/comments  

---

## Platform Options

- `'linkedin'` - Blue badge with LinkedIn icon
- `'instagram'` - Pink gradient badge with Instagram icon  
- `'twitter'` - Light blue badge with Twitter icon

---

## What Gets Displayed

Each post card shows:
- Platform badge (LinkedIn/Instagram/Twitter)
- Post image with hover zoom effect
- "View Post" button (appears on hover)
- Post caption (first 3 lines)
- Like count (❤️)
- Comment count (💬)
- Post date (formatted automatically)

When clicked, users go directly to your **actual post** on LinkedIn or Instagram!

---

## Need Help?

- Post not showing? Check for syntax errors (missing commas, quotes)
- Image not loading? Try a different image URL
- Date format must be: `'YYYY-MM-DD'` (in quotes)
- All URLs must be in quotes: `'https://...'`

---

**That's it! Your social feed will now display real, authentic posts that link directly to your LinkedIn and Instagram.** 🎉
