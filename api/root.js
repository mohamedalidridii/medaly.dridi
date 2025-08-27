import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';
  
  if (userAgent.toLowerCase().includes('curl')) {
    try {
      const asciiPath = path.join(process.cwd(), 'ascii.txt');
      const asciiContent = fs.readFileSync(asciiPath, 'utf8');
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.status(200).send(asciiContent);
    } catch (error) {
      res.status(500).send('Error: Could not load ASCII art');
    }
  } else {
    // Redirect browsers to the actual site
    res.writeHead(302, { Location: '/index.html' });
    res.end();
  }
}
