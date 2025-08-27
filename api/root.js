export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';
  
  if (userAgent.toLowerCase().includes('curl')) {
    const asciiContent = `       ▄▄  ▄▄  ▄▄▄▄     ▄▄▄   ▄▄▄▄▄ 
                  ▀▀  ▄▄▀ ▀ ▄              Welcome to Medaly Engineer
        ▀  ▀   ▀▀▀▀ ▄   ▄▄▄     ▄▄ ▀       Crafted by Mohamed Ali Dridi
              ▀ ▄▄▄ ▀                      https://medaly.engineer
       ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
       ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄       Source: github.com/medaly/medaly.engineer`;
    
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.status(200).send(asciiContent);
  } else {
    res.writeHead(302, { Location: '/index.html' });
    res.end();
  }
}
