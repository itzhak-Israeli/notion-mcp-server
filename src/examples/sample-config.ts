/**
 * USE CASE 5: False positives due to placeholders
 *
 * Sample Configuration File for Examples/Documentation
 *
 * Expected Behavior:
 * - These placeholder values should NOT trigger alerts
 * - Your analyzer should recognize common placeholder patterns
 * - NO posture gaps created for these example values
 */

/**
 * Sample API configuration
 * NOTE: Replace these placeholder values with your actual credentials
 */
export const sampleApiConfig = {
  // Placeholder API key - should be ignored
  apiKey: 'YOUR_API_KEY_HERE',

  // Example token - should be ignored
  token: 'example_token_12345',

  // Demo secret - should be ignored
  secret: 'demo_secret_abc123',

  // Test credentials - should be ignored
  credentials: {
    username: 'test_user',
    password: 'test_password_123'
  }
};

/**
 * Example AWS configuration
 * TODO: Replace with actual AWS credentials
 */
export const exampleAwsConfig = {
  accessKeyId: 'AKIAIOSFODNN7EXAMPLE',  // This is AWS's example key
  secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',  // AWS example secret
  region: 'us-east-1'
};

/**
 * Sample database connection
 * FIXME: Update with production database credentials
 */
export const sampleDbConnection = {
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',  // Default postgres password - placeholder
  database: 'example_db'
};

/**
 * Example JWT configuration
 * CHANGEME: Replace with your actual JWT secret
 */
export const exampleJwtConfig = {
  secret: 'your-jwt-secret-here',
  algorithm: 'HS256',
  expiresIn: '1h'
};

/**
 * Placeholder OAuth configuration
 * Insert your actual OAuth credentials below
 */
export const placeholderOAuthConfig = {
  clientId: '<YOUR_CLIENT_ID>',
  clientSecret: '<YOUR_CLIENT_SECRET>',
  redirectUri: 'http://localhost:3000/callback'
};

/**
 * Generic placeholder patterns
 */
export const commonPlaceholders = {
  apiKey: '[INSERT_YOUR_API_KEY]',
  token: '{{YOUR_TOKEN}}',
  secret: 'XXXXXXXXXXXXXXXXXXXX',
  password: '************',
  key: '________________________________'
};

/**
 * Test/Development keys (not for production)
 * These are clearly marked as test values
 */
export const testKeys = {
  testApiKey: 'test_key_abc123',
  devToken: 'dev_token_xyz789',
  mockSecret: 'mock_secret_000',
  sampleKey: 'sample_key_demo'
};

/**
 * Documentation example
 *
 * Usage:
 * ```
 * const config = {
 *   apiKey: 'sk_live_YOUR_ACTUAL_KEY_HERE'
 * };
 * ```
 */
export function exampleUsage() {
  return {
    // This should be replaced with actual key
    apiKey: 'replace_me_with_real_key'
  };
}
