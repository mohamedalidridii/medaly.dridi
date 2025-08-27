const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
  const ua = req.headers["user-agent"] || "";

  // Detect curl, wget, or httpie
  if (/curl|wget|httpie/i.test(ua)) {
    const asciiPath = path.join(process.cwd(), "ascii.txt");
    const ascii = fs.readFileSync(asciiPath, "utf8");

    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    return res.status(200).send(ascii);
  }

// Otherwise → serve the real frontend (index.html from Vite build)
  const indexPath = path.join(process.cwd(), "build", "index.html"); 
  const html = fs.readFileSync(indexPath, "utf8");

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  return res.status(200).send(html);
};

