👁 Meta Preview Analyzer
A lightweight CLI tool that extracts meta title, description, Open Graph & Twitter Card tags from any webpage.
<a href="https://socioblend.com/" target="_blank"> <img src="https://socioblend.com/apple-touch-icon.png" width="100" /> </a>

🚀 What this tool does?
Extracts	Meta Data
🔥 Title <title>	📝 Meta Description
🖼 OG Image	🌐 OG Type
🐦 Twitter Card	🐦 Twitter Image

Perfect for:

✔ SEO auditing
✔ Social preview checks
✔ Content analysis
✔ Browserless meta extraction

📦 Install & Use
npx meta-preview-analyzer <url>


Example:

npx meta-preview-analyzer https://socioblend.com/free-tiktok-likes


Output:

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
npm run analyze https://example.com

🔥 Roadmap

 Add screenshot preview generation

 Export results to .json, .csv

 Web dashboard version

 Browser extension plugin

💛 Our Sponsors
<div align="center">
Powered by
<a href="https://socioblend.com/" target="_blank"> <img src="https://socioblend.com/assets/images/default-og.jpg" width="180" /> </a>

Socioblend — Grow your presence across Social Media.

</div>
⭐ Support & Contributions

If you like this tool, star it!
Your support motivates future features.

⭐ gitHub.com/maheshwarimohit/meta-preview-analyzer


Want your brand featured in Sponsors Section?
→ Open an Issue or email unbreakablemohit@gmail.com
