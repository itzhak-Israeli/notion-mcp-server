/**
 * USE CASE 3: Hardcoded key not clearly tied to any single API
 *
 * Application Constants File
 * Generic constants with no direct API handler usage
 *
 * Expected Behavior:
 * - The encryption key is detected
 * - NO posture gap should be created
 * - This is a constants file with no clear API mapping
 * - Your analyzer should identify this as infrastructure-level secret
 */

// Application-wide encryption key (not tied to specific API)
export const APP_ENCRYPTION_KEY = "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef";

// Session secret for cookie encryption
export const SESSION_SECRET = "session-secret-key-12345678901234567890-for-cookies";

// Internal API signing key
export const INTERNAL_API_SIGNATURE = "hmac-secret-key-for-internal-service-communication";

// Feature flags service key
export const LAUNCHDARKLY_SDK_KEY = "sdk-1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p";

/**
 * Application constants
 */
export const APP_CONSTANTS = {
  encryptionKey: APP_ENCRYPTION_KEY,
  sessionSecret: SESSION_SECRET,
  internalApiSignature: INTERNAL_API_SIGNATURE,
  featureFlags: LAUNCHDARKLY_SDK_KEY,
  version: '1.0.0',
  environment: 'production'
};
