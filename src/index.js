const axios = require("axios");
const cheerio = require("cheerio");

async function analyzePage(url) {
  const response = await axios.get(url, {
    timeout: 15000,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    },
  });

  const html = response.data;
  const $ = cheerio.load(html);

  const title =
    $('meta[property="og:title"]').attr("content") ||
    $("title").text() ||
    "";

  const description =
    $('meta[name="description"]').attr("content") ||
    $('meta[property="og:description"]').attr("content") ||
    "";

  const ogImage = $('meta[property="og:image"]').attr("content") || "";
  const ogType = $('meta[property="og:type"]').attr("content") || "";
  const twitterCard =
    $('meta[name="twitter:card"]').attr("content") || "";
  const twitterImage =
    $('meta[name="twitter:image"]').attr("content") || "";

  return {
    url,
    title: title.trim(),
    description: description.trim(),
    ogType: ogType.trim(),
    ogImage: ogImage.trim(),
    twitterCard: twitterCard.trim(),
    twitterImage: twitterImage.trim(),
  };
}

(async () => {
  const url = process.argv[2];

  if (!url) {
    console.error("Usage: node index.js <url>");
    process.exit(1);
  }

  try {
    const result = await analyzePage(url);
    console.log(JSON.stringify(result, null, 2));
  } catch (err) {
    console.error("Failed to analyze page:");
    console.error(err.message);
  }
})();
