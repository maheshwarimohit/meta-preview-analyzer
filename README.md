<h1 align="center">Meta Preview Analyzer</h1>

<p align="center">
  <img src="https://github.com/maheshwarimohit/meta-preview-analyzer/blob/main/main/assets/meta-preview-analyzer.png" width="50%" />
</p>


A lightweight Node.js CLI that extracts Title, Meta Description, Open Graph tags, and Twitter Card metadata from any public webpage.

If you share URLs on social media, publish blog content, or audit SEO for clients, metadata matters. A broken preview kills clicks. This tool checks everything instantly from the terminal.

npx meta-preview-analyzer <url>


No browser. No DevTools. No Facebook Debugger. No heavy headless Chrome.
Just clean JSON and real meta data.

<p align="center"> <img src="https://img.shields.io/github/stars/maheshwarimohit/meta-preview-analyzer?style=social" /> <img src="https://img.shields.io/badge/license-MIT-green" /> </p>
🔥 Purpose

Most crawlers overfetch pages, load full render engines or require API keys.
Meta Preview Analyzer does one job well: fetch only the metadata that affects social previews and SEO snippets.

No Chromium

No rendering overhead

No authentication

Works in plain Node.js

🔍 What problems does this solve?

This CLI is made for real-world workflows:

Problem	Solution
Link previews on WhatsApp/Twitter show wrong image	Extract OG + Twitter tags instantly
Blog meta descriptions missing or duplicated	Validate before publishing
Client SEO audits require mass metadata checks	Run URLs in bulk from terminal
Social preview checkers are slow + browser based	Zero UI, zero login, zero waiting
Need metadata for automation scripts	Import as a Node module and consume JSON

🚀 Quick Start
Run instantly
npx meta-preview-analyzer <url>


Example:

npx meta-preview-analyzer https://socioblend.com/free-tiktok-likes

Install globally (optional)
npm install -g meta-preview-analyzer

🧪 Output Example
{
  "url": "https://socioblend.com/free-tiktok-likes",
  "title": "Get Free TikTok Likes | Fast | No Password | - SocioBlend",
  "description": "Get free TikTok likes instantly. No login, no password...",
  "ogType": "website",
  "ogImage": "https://socioblend.com/img_upload/free-tiktok-likes.png",
  "twitterCard": "summary_large_image",
  "twitterImage": "https://socioblend.com/img_upload/free-tiktok-likes.png"
}


Returns only metadata that affects SEO and social previews.

✨ What it extracts
Category	Fields
Core SEO	title, meta description
Open Graph	og:title, og:description, og:image, og:type, og:url
Twitter Cards	twitter:title, twitter:description, twitter:image, twitter:card
Extras	Fallback if tags missing + URL echo
🏆 Best Use Cases
SEO Analysts

Check Open Graph + Twitter tags before publishing

Audit metadata across multiple domains

Identify missing or default meta descriptions

Developers

Validate metadata during CI/CD deploys

Integrate output with scrapers or crawlers

Use JSON programmatically

Social Media Teams

Preview share cards without logging into Facebook or X

Verify thumbnails before campaign launch

Debug broken link appearance

💡 Batch + Automation
Save output to a file
npx meta-preview-analyzer <url> > output.json

Run on multiple URLs
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

🧪 Testing
npm test

Check	Status

Tag extraction	✔

Missing/fallback tags	✔

Invalid/non-HTML pages	✔

Non-200 responses	Pending

Rate limit resilience	Roadmap

🐛 Troubleshooting

Issue	Reason

Empty metadata fields	Site has no OG/Twitter tags

No OG image	Twitter image may still exist

HTTPS errors	Use proxy or retry later

Works in browser but not CLI	Servers block non-browser user agents (spoofing planned)

🔮 Roadmap

Feature	Priority

Screenshot Preview Rendering	⭐⭐

Export JSON + CSV	⭐⭐

Batch mode (--file=urls.txt)	⭐⭐⭐

Web Dashboard UI	⭐⭐⭐

Browser Extension	⭐⭐⭐⭐

Caching for speed	⭐

Raise feature requests → GitHub Issues

💛 Sponsors

<a href="https://socioblend.com/" target="_blank"> <img src="https://github.com/maheshwarimohit/meta-preview-analyzer/blob/main/main/assets/socioblend-logo.png" width="90" /> </a>


Email: unbreakablemohit@gmail.com

Sponsor benefit: Logo + link + NPM mention + roadmap priority

⭐ Support the Tool

If Meta Preview Analyzer saved you time, a ⭐ means more development:

https://github.com/maheshwarimohit/meta-preview-analyzer

Stars = motivation = faster features.
