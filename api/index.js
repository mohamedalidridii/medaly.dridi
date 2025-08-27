import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';
  const { slug } = req.query;
  
  // Only handle root path requests
  if (!slug || slug.length === 0) {
    if (userAgent.toLowerCase().includes('curl')) {
      try {
        const asciiPath = path.join(process.cwd(), 'ascii.txt');
        const asciiContent = fs.readFileSync(asciiPath, 'utf8');
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.status(200).send(asciiContent);
        return;
      } catch (error) {
        res.status(500).send('Error: Could not load ASCII art');
        return;
      }
    } else {
      // For browsers, serve the built HTML
      try {
        const htmlPath = path.join(process.cwd(), 'build', 'index.html');
        const htmlContent = fs.readFileSync(htmlPath, 'utf8');
        res.setHeader('Content-Type', 'text/html');
        res.status(200).send(htmlContent);
        return;
      } catch (error) {
        res.writeHead(302, { Location: '/index.html' });
        res.end();
        return;
      }
    }
  }
  
  // For other paths, return 404
  res.status(404).send('Not found');
}
