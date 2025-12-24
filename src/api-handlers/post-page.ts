/**
 * API Handler: Create a Page (with payment processing)
 * Operation ID: post-page
 * Endpoint: POST /v1/pages
 *
 * @api-endpoint /v1/pages
 * @api-method POST
 * @operation-id post-page
 *
 * This API uses the shared Stripe payment service
 */

import { processPayment } from '../services/stripe-payment-service';

/**
 * Create a new page with premium features (requires payment)
 */
export async function createPage(parentPageId: string, title: string, isPremium: boolean) {
  // If premium, process payment
  if (isPremium) {
    await processPayment(999, 'usd'); // Uses STRIPE_SECRET_KEY from shared service
  }

  const page = {
    parent: { page_id: parentPageId },
    properties: {
      title: [
        {
          text: { content: title }
        }
      ]
    }
  };

  const response = await fetch('https://api.notion.com/v1/pages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Notion-Version': '2022-06-28'
    },
    body: JSON.stringify(page)
  });

  return response.json();
}
