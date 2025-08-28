import { NextResponse, userAgent } from 'next/server';

export default function middleware(request) {
  const { ua } = userAgent(request);

  // Check if the user agent contains "curl"
  if (ua.includes('curl')) {
    // If it's a curl request, rewrite to a specific plain text file
    return NextResponse.rewrite(new URL('/ascii.txt', request.url));
  }

  // Otherwise, continue to the default HTML page
  return NextResponse.next();
}

// Optional: Configure the matcher to run the middleware on specific paths
export const config = {
  matcher: '/',
};


