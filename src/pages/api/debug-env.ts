export const prerender = false;

import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  // Get environment variables
  const NTFY_URL = import.meta.env.NTFY_URL ?? process.env.NTFY_URL;
  const NTFY_TOKEN = import.meta.env.NTFY_TOKEN ?? process.env.NTFY_TOKEN;

  // Log environment variables for debugging
  console.log('Environment variables:');
  console.log('NTFY_URL:', NTFY_URL ? 'defined' : 'undefined');
  console.log('NTFY_TOKEN:', NTFY_TOKEN ? 'defined' : 'undefined');

  // Return environment variable status
  return new Response(
    JSON.stringify({
      NTFY_URL: NTFY_URL ? 'defined' : 'undefined',
      NTFY_TOKEN: NTFY_TOKEN ? 'defined' : 'undefined',
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};
