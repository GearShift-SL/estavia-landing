// This API endpoint:
// 1. Sends a notification to NTFY if enabled

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

    // Initialize the success flag
    let success = false;

    try {
      /* -------------------------------- Send NTFY ------------------------------- */
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
        success = true;
      } else {
        console.error('Failed to send NTFY notification');
      }

      /* ------------------ Everything was processed successfully ----------------- */
      if (success) {
        console.info('Contact form processed successfully');

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
        console.error('None of the operations were successful, returning a 400 status');
        return new Response(null, { status: 400 });
      }
    } catch (error) {
      // An error occurred while doing the API operation
      console.error('An unexpected error occurred while adding contact:', error);
      return new Response(null, { status: 400 });
    }
  }

  // If the POST request is not a JSON request, return a 400 status to the frontend
  return new Response(null, { status: 400 });
};
