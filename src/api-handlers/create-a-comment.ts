/**
 * API Handler: Create a Comment (with payment verification)
 * Operation ID: create-a-comment
 * Endpoint: POST /v1/comments
 *
 * @api-endpoint /v1/comments
 * @api-method POST
 * @operation-id create-a-comment
 *
 * This API also uses the shared Stripe payment service
 */

import { createCustomer } from '../services/stripe-payment-service';

/**
 * Create a comment and set up customer billing
 */
export async function createComment(pageId: string, content: string, userEmail: string) {
  // Create Stripe customer for billing
  await createCustomer(userEmail); // Uses STRIPE_SECRET_KEY from shared service

  const comment = {
    parent: { page_id: pageId },
    rich_text: [
      {
        text: { content: content }
      }
    ]
  };

  const response = await fetch('https://api.notion.com/v1/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Notion-Version': '2022-06-28'
    },
    body: JSON.stringify(comment)
  });

  return response.json();
}
