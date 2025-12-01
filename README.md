Meta Preview Analyzer

Simple CLI to extract Title, Description, Open Graph & Twitter Card metadata from any public URL.

<p align="center">  <img src="https://img.shields.io/github/stars/maheshwarimohit/meta-preview-analyzer?style=social" /> <img src="https://img.shields.io/badge/license-MIT-green" /> </p>
🔥 Why this exists

Most crawlers scrape entire pages, load browser engines, or require API keys.
This tool does something simpler:

Fetch only the metadata you actually need.
No chromium. No render overhead. No fuss.

✨ What it extracts
Category	Fields
Core SEO	title, meta description
Open Graph	og:image, og:type, og:url, og:title, og:description
Twitter Cards	twitter:image, twitter:card, twitter:title, twitter:description
Meta Summary	URL − + fallback detection if tags missing

It is built for SEO analysts, developers, content teams, and automation scripts.

🚀 Quick Start

Install globally (optional):

npm install -g meta-preview-analyzer


or run instantly without install:

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

🏆 Perfect Use Cases
SEO Teams

Audit pages in bulk

Check missing or incomplete tags

Validate client blogs at scale

Developers

Use as part of web scraping scripts

Validate metadata during deployments

Automate link preview verification

Social Media/Branding

Ensure social shares look correct

Fetch thumbnails for preview generation

Check Twitter Cards without opening the browser

🧠 Advanced Usage
Save output to file
npx meta-preview-analyzer <url> > output.json

Run on multiple URLs (Bash)
for i in $(cat urls.txt); do npx meta-preview-analyzer $i; done

Use inside Node scripts
import analyze from "meta-preview-analyzer";

const data = await analyze("https://example.com");
console.log(data.title, data.ogImage);

🔧 Local Development
git clone https://github.com/maheshwarimohit/meta-preview-analyzer.git
cd meta-preview-analyzer
npm install
npm run analyze <url>


Demo:

<p align="center"><img src="assets/demo.gif" width="70%"></p>
🧪 Testing
npm test


Automated checks cover:

Test	Status
Tag extraction	✔
Missing/fallback tags	✔
Invalid/non-HTML pages	✔
Non-200 responses	Pending
Rate limit handling	Roadmap
🐛 Troubleshooting
Issue	Fix
Empty fields returned	Site missing meta tags, not a bug
No OG image	Twitter may still have one
Invalid HTTPS / 403	Use proxy or retry later
URL works in normal browser but not CLI	Server blocks non-browser User Agents (roadmap: UA spoofing)
🔮 Roadmap — What’s coming
Feature	Priority
Screenshot Preview Capture	⭐⭐
JSON + CSV Export	⭐⭐
Batch mode (--file=url.txt)	⭐⭐⭐
Web Dashboard UI	⭐⭐⭐
Browser Extension	⭐⭐⭐⭐
Caching + Speed Boost	⭐

Suggest more → open an issue.

💛 Sponsors

<a href="https://socioblend.com/" target="_blank">
  <img src="https://github.com/maheshwarimohit/meta-preview-analyzer/blob/main/main/assets/socioblend-logo.png" width="80" />
</a>

If you want your brand here:



📩 unbreakablemohit@gmail.com
📂 Open an Issue

Brands get:

Benefit	Included
Logo in README	✔
Mention on npm	✔
Product link + CTA	✔
Priority roadmap access	✔
📣 Spread the Word

If this tool saved you time → star it.

⭐ github.com/maheshwarimohit/meta-preview-analyzer


Stars = motivation = faster features.
