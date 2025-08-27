import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';
  
  // Check if the request is from curl
  if (userAgent.toLowerCase().includes('curl')) {
    try {
      // Read your ASCII file
      const asciiPath = path.join(process.cwd(), 'ascii.txt');
      const asciiContent = fs.readFileSync(asciiPath, 'utf8');
      
      // Set plain text content type
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.status(200).send(asciiContent);
    } catch (error) {
      res.status(500).send('ASCII art not found');
    }
  } else {
    // For browsers, serve a simple redirect to your main site
    // or you could serve HTML directly here
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta http-equiv="refresh" content="0;url=/index.html">
        </head>
        <body>
          <p>Redirecting to portfolio...</p>
        </body>
      </html>
    `);
    res.writeHead(302, { Location: '/index.html' });
    res.end(); 

  }
}

