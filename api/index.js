import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  // Temporary: always serve ASCII for testing
  try {
    const asciiPath = path.join(process.cwd(), 'ascii.txt');
    const asciiContent = fs.readFileSync(asciiPath, 'utf8');
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.status(200).send(asciiContent);
  } catch (error) {
    res.status(500).send('Error: Could not load ASCII art');
  }
}
