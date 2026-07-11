/**
 * API Route: /api/social-posts
 * 
 * This serverless function fetches posts from LinkedIn and Instagram APIs
 * and returns them in a unified format for the frontend.
 * 
 * DEPLOYMENT INSTRUCTIONS:
 * 
 * For Vercel:
 * - Place this file in /api/ folder
 * - Add environment variables in Vercel dashboard
 * 
 * For Netlify:
 * - Move to /netlify/functions/ folder
 * - Rename to social-posts.js
 * - Add environment variables in Netlify dashboard
 */

// Environment variables (set these in your deployment platform)
const LINKEDIN_ACCESS_TOKEN = process.env.LINKEDIN_ACCESS_TOKEN || '';
const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN || '';
const INSTAGRAM_USER_ID = process.env.INSTAGRAM_USER_ID || '';

interface SocialPost {
  platform: 'linkedin' | 'instagram';
  id: string;
  url: string;
  content: string;
  image: string;
  date: string;
  likes: number;
  comments: number;
}

/**
 * Fetch LinkedIn Posts
 */
async function fetchLinkedInPosts(): Promise<SocialPost[]> {
  if (!LINKEDIN_ACCESS_TOKEN) {
    console.warn('LinkedIn access token not configured');
    return [];
  }

  try {
    // Fetch user's LinkedIn posts
    const response = await fetch(
      'https://api.linkedin.com/v2/ugcPosts?q=authors&authors=List(urn:li:person:YOUR_PERSON_ID)&count=10&sortBy=LAST_MODIFIED',
      {
        headers: {
          'Authorization': `Bearer ${LINKEDIN_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
          'X-Restli-Protocol-Version': '2.0.0'
        }
      }
    );

    if (!response.ok) {
      throw new Error(`LinkedIn API error: ${response.statusText}`);
    }

    const data = await response.json();
    const posts: SocialPost[] = [];

    for (const post of data.elements || []) {
      const postId = post.id.split(':').pop() || '';
      const specificContent = post.specificContent?.['com.linkedin.ugc.ShareContent'];
      
      // Extract text
      const text = post.commentary || specificContent?.shareCommentary?.text || '';
      
      // Extract image
      let image = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800';
      if (specificContent?.media?.[0]?.media) {
        const mediaUrn = specificContent.media[0].media;
        // You'd need to fetch the actual image URL from the media URN
        // This requires an additional API call to get the media details
      }

      // Extract stats (requires additional API calls)
      const likes = 0; // Placeholder
      const comments = 0; // Placeholder

      posts.push({
        platform: 'linkedin',
        id: postId,
        url: `https://www.linkedin.com/feed/update/urn:li:activity:${postId}`,
        content: text.substring(0, 300), // Limit length
        image,
        date: new Date(post.created?.time || Date.now()).toISOString().split('T')[0],
        likes,
        comments
      });
    }

    return posts.slice(0, 5); // Return top 5 posts
  } catch (error) {
    console.error('Error fetching LinkedIn posts:', error);
    return [];
  }
}

/**
 * Fetch Instagram Posts
 */
async function fetchInstagramPosts(): Promise<SocialPost[]> {
  if (!INSTAGRAM_ACCESS_TOKEN || !INSTAGRAM_USER_ID) {
    console.warn('Instagram credentials not configured');
    return [];
  }

  try {
    // Fetch user's Instagram media
    const response = await fetch(
      `https://graph.instagram.com/${INSTAGRAM_USER_ID}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,like_count,comments_count&access_token=${INSTAGRAM_ACCESS_TOKEN}&limit=10`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.statusText}`);
    }

    const data = await response.json();
    const posts: SocialPost[] = [];

    for (const media of data.data || []) {
      // Only include images and carousels (not videos for simplicity)
      if (media.media_type === 'IMAGE' || media.media_type === 'CAROUSEL_ALBUM') {
        posts.push({
          platform: 'instagram',
          id: media.id,
          url: media.permalink,
          content: media.caption || '',
          image: media.media_url || media.thumbnail_url || '',
          date: new Date(media.timestamp).toISOString().split('T')[0],
          likes: media.like_count || 0,
          comments: media.comments_count || 0
        });
      }
    }

    return posts.slice(0, 5); // Return top 5 posts
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    return [];
  }
}

/**
 * Main handler function
 */
export default async function handler(req: any, res: any) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    // Fetch from both platforms in parallel
    const [linkedinPosts, instagramPosts] = await Promise.all([
      fetchLinkedInPosts(),
      fetchInstagramPosts()
    ]);

    // Combine and sort by date
    const allPosts = [...linkedinPosts, ...instagramPosts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    // Return top 8 posts
    res.status(200).json({
      posts: allPosts.slice(0, 8),
      lastUpdated: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error in social-posts API:', error);
    res.status(500).json({
      error: 'Failed to fetch social posts',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

// For Netlify Functions, export as handler
export { handler };
