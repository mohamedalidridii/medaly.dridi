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
      // Try multiple possible paths for the ascii file
      let asciiContent;
      const possiblePaths = [
        path.join(process.cwd(), 'public', 'ascii.txt'),
        path.join(process.cwd(), 'ascii.txt'),
        './public/ascii.txt',
        './ascii.txt'
      ];
      
      for (const filePath of possiblePaths) {
        try {
          asciiContent = fs.readFileSync(filePath, 'utf8');
          break;
        } catch (e) {
          continue;
        }
      }
      
      if (asciiContent) {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.status(200).send(asciiContent);
      } else {
        throw new Error('ASCII file not found');
      }
    } catch (error) {
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.status(200).send(`Welcome to medaly.engineer

Portfolio Engineer & Developer
==============================

🌐 Browser: Visit https://medaly.engineer for the full portfolio
📧 Email: contact@medaly.engineer
💼 LinkedIn: /in/medaly-dridi
🐙 GitHub: /mohamedalidridii

Currently building amazing web experiences...
      `);
    }
  } else {
    // Serve the built app or redirect to static files
    try {
      // Try to read the built HTML file
      let htmlContent;
      const possibleHtmlPaths = [
        path.join(process.cwd(), 'dist', 'index.html'),
        path.join(process.cwd(), 'build', 'index.html'),
        path.join(process.cwd(), 'public', 'index.html'),
        './dist/index.html',
        './build/index.html',
        './index.html'
      ];
      
      for (const filePath of possibleHtmlPaths) {
        try {
          htmlContent = fs.readFileSync(filePath, 'utf8');
          break;
        } catch (e) {
          continue;
        }
      }
      
      if (htmlContent) {
        // Fix asset paths in HTML if needed
        const fixedHtml = htmlContent.replace(
          /(href|src)="\//g,
          '$1="https://www.medaly.engineer/'
        );
        res.setHeader('Content-Type', 'text/html');
        res.status(200).send(htmlContent);
      } else {
        throw new Error('HTML file not found');
      }
    } catch (error) {
      // Fallback HTML if files aren't found
      res.setHeader('Content-Type', 'text/html');
      res.status(200).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Medaly Dridi - Portfolio</title>
          <style>
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              max-width: 800px; 
              margin: 0 auto; 
              padding: 2rem;
              line-height: 1.6;
            }
            .loading { 
              text-align: center; 
              color: #666; 
              margin-top: 2rem;
            }
          </style>
        </head>
        <body>
          <h1>Medaly Dridi</h1>
          <h2>Portfolio Engineer & Developer</h2>
          <p>Welcome to my portfolio! The site is currently loading...</p>
          <div class="loading">
            <p>🚀 Building amazing web experiences</p>
            <p>Try: <code>curl https://medaly.engineer</code> for terminal view</p>
          </div>
        </body>
        </html>
      `);
    }
  }
}
