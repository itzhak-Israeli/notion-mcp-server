/**
 * API Handler: Update a Database (with subscription billing)
 * Operation ID: update-a-database
 * Endpoint: PATCH /v1/databases/{database_id}
 *
 * @api-endpoint /v1/databases/{database_id}
 * @api-method PATCH
 * @operation-id update-a-database
 *
 * This API also uses the shared Stripe payment service
 */

import { processPayment, getBalance } from '../services/stripe-payment-service';

/**
 * Update database and process subscription billing
 */
export async function updateDatabase(databaseId: string, title: string) {
  // Check Stripe balance before update
  await getBalance(); // Uses STRIPE_SECRET_KEY from shared service

  // Process monthly subscription
  await processPayment(2999, 'usd'); // Uses STRIPE_SECRET_KEY from shared service

  const database = {
    title: [
      {
        type: "text",
        text: { content: title }
      }
    ]
  };

  const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Notion-Version': '2022-06-28'
    },
    body: JSON.stringify(database)
  });

  return response.json();
}
