import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export function middleware(request) {
  const userAgent = request.headers.get('user-agent') || '';
  
  if (request.nextUrl.pathname === '/' && userAgent.toLowerCase().includes('curl')) {
    try {
      // Note: In middleware, you might need to handle file reading differently
      // This is a simplified version
      const asciiContent = `
       ▄▄  ▄▄  ▄▄▄▄     ▄▄▄   ▄▄▄▄▄ 
                  ▀▀  ▄▄▀ ▀ ▄              Welcome to Medaly Engineer
        ▀  ▀   ▀▀▀▀ ▄   ▄▄▄     ▄▄ ▀       Crafted by Mohamed Ali Dridi
              ▀ ▄▄▄ ▀                      https://medaly.engineer
       ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
       ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄       Source: github.com/medaly/medaly.engineer
      `;
      
      return new Response(asciiContent, {
        headers: {
          'content-type': 'text/plain; charset=utf-8',
        },
      });
    } catch (error) {
      return new Response('ASCII art not available', {
        headers: {
          'content-type': 'text/plain',
        },
      });
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/',
};
