/**
 * USE CASE 2: Hardcoded key used across multiple APIs
 *
 * Shared Service: Stripe Payment Service
 * This service is used by multiple API endpoints
 *
 * Expected Behavior:
 * - The Stripe secret key is detected in this file
 * - System maps the finding to ALL APIs that import/use this service
 * - Posture gap is created for EACH API that uses this service
 * - Each API's schema includes: secret_Stripe_API_Key: true
 */

// Stripe Secret Key - shared across multiple APIs
const STRIPE_SECRET_KEY = "sk_live_51HqJ2eLkjhg2345678901234567890123456789012345678901234567890";

/**
 * Process payment using Stripe
 */
export async function processPayment(amount: number, currency: string) {
  const response = await fetch('https://api.stripe.com/v1/payment_intents', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${STRIPE_SECRET_KEY}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `amount=${amount}&currency=${currency}`
  });

  return response.json();
}

/**
 * Create Stripe customer
 */
export async function createCustomer(email: string) {
  const response = await fetch('https://api.stripe.com/v1/customers', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${STRIPE_SECRET_KEY}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `email=${email}`
  });

  return response.json();
}

/**
 * Get Stripe balance
 */
export async function getBalance() {
  const response = await fetch('https://api.stripe.com/v1/balance', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${STRIPE_SECRET_KEY}`
    }
  });

  return response.json();
}
