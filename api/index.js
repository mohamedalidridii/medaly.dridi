import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';
  const accept = req.headers['accept'] || '';
  
  // Detect if request is from curl/terminal
  const isCurl = userAgent.includes('curl') || 
                 userAgent.includes('wget') ||
                 accept.includes('text/plain') ||
                 !accept.includes('text/html');
  
  if (isCurl) {
    // Serve plain text for terminal
    try {
      const asciiContent = fs.readFileSync(path.join(process.cwd(), 'ascii.txt'), 'utf8');
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.status(200).send(asciiContent);
    } catch (error) {
      res.setHeader('Content-Type', 'text/plain');
      res.status(200).send('Welcome to medaly.engineer\n\nPortfolio loading...');
    }
  } else {
    // Serve the built React/Vue/vanilla app
    try {
      const htmlContent = fs.readFileSync(path.join(process.cwd(), 'dist/index.html'), 'utf8');
      res.setHeader('Content-Type', 'text/html');
      res.status(200).send(htmlContent);
    } catch (error) {
      res.status(404).send('Portfolio not found');
    }
  }
}
