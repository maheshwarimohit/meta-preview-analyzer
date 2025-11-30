Meta Preview Analyzer

Lightweight CLI that extracts Title, Meta Description, Open Graph, and Twitter Card tags from any webpage.
Great for SEO, social previews, audits, and content discovery.

🔥 Features
What it fetches	Tags Covered
Page SEO Meta	<title>, <meta name="description">
Social Preview Data	OG Image / Type, Twitter Card / Image
Browserless Extraction	No rendering needed
📦 Installation & Usage
Run instantly (no install):
npx meta-preview-analyzer <url>

Example:
npx meta-preview-analyzer https://socioblend.com/free-tiktok-likes


Output

{
  "url": "https://socioblend.com/free-tiktok-likes",
  "title": "Get Free TikTok Likes | Fast | No Password | - SocioBlend",
  "description": "Get free TikTok likes instantly. No login, no password...",
  "ogType": "website",
  "ogImage": "https://socioblend.com/img_upload/free-tiktok-likes.png",
  "twitterCard": "summary_large_image",
  "twitterImage": "https://socioblend.com/img_upload/free-tiktok-likes.png"
}

⚙ Local Development
git clone https://github.com/maheshwarimohit/meta-preview-analyzer.git
cd meta-preview-analyzer
npm install
npm run analyze <url>

🔮 Roadmap

Screenshot preview generation

Export to .json, .csv

Web UI Dashboard

Browser Extension

If you want any one of these fast tracked — contribute or sponsor the feature.

💛 Sponsors

Currently seeking early sponsors.

🚀 To sponsor → open an issue or email unbreakablemohit@gmail.com

⭐ Support

If this saved you time, star the repo.
Stars push this tool further than you think.

🔗 Repo: github.com/maheshwarimohit/meta-preview-analyzer
