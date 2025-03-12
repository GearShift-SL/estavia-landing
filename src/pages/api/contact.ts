// This API endpoint:
// 1. Sends a notification to NTFY

// Args:
// - name: string
// - email: string
// - message: string

// Returns:
// - 200 status if the message was sent successfully
// - 400 status if an error occurred

export const prerender = false;

import type { APIRoute } from 'astro';
import { sendNotification } from '~/utils/ntfy';

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get('content-type') === 'application/json') {
    const body = await request.json();
    const name = body.name;
    const email = body.email;
    const message = body.message;

    // Debug the body
    console.debug('Data received:', body);

    try {
      /* -------------------------------- Send NTFY ------------------------------- */
      // Check if environment variables are available
      const NTFY_URL = import.meta.env.NTFY_URL ?? process.env.NTFY_URL;
      const NTFY_TOKEN = import.meta.env.NTFY_TOKEN ?? process.env.NTFY_TOKEN;

      if (!NTFY_URL || !NTFY_TOKEN) {
        console.error('Missing environment variables: NTFY_URL or NTFY_TOKEN');
        return new Response(
          JSON.stringify({
            error: 'Server configuration error: Missing environment variables',
          }),
          { status: 500 }
        );
      }

      const ntfySent = await sendNotification({
        topic: 'autovisita-contact',
        body: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        title: 'New contact form submission',
        tags: 'email',
        actions: `view, Reply via Email, mailto:${email}`,
        email: 'hola@autovisita.es',
      });

      if (ntfySent) {
        console.info('NTFY notification sent successfully');

        // Return a 200 status and the response to our frontend
        return new Response(
          JSON.stringify({
            message: 'Contact form processed successfully',
          }),
          {
            status: 200,
          }
        );
      } else {
        console.error('Failed to send NTFY notification');

        return new Response(
          JSON.stringify({
            error: 'Failed to send notification',
          }),
          { status: 500 }
        );
      }
    } catch (error) {
      // An error occurred while doing the API operation
      console.error('An unexpected error occurred while adding contact:', error);
      return new Response(
        JSON.stringify({
          error: 'An unexpected error occurred',
          details: error instanceof Error ? error.message : String(error),
        }),
        { status: 500 }
      );
    }
  }

  // If the POST request is not a JSON request, return a 400 status to the frontend
  return new Response(
    JSON.stringify({
      error: 'Invalid content type. Expected application/json',
    }),
    { status: 400 }
  );
};
