/**
 * USE CASE 3: Hardcoded key not clearly tied to any single API
 *
 * Utility File: Logger Configuration
 * This is a standalone utility file with no direct API usage
 *
 * Expected Behavior:
 * - The Datadog API key is detected in this file
 * - NO posture gap should be created
 * - NO API mapping exists (utility file, no direct call path to specific APIs)
 * - Your analyzer should NOT associate this key with any specific API endpoint
 */

// Datadog API Key for logging - used by infrastructure, not tied to any specific API
const DATADOG_API_KEY = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";
const DATADOG_APP_KEY = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d";

/**
 * Logger utility class
 */
export class Logger {
  private static instance: Logger;

  private constructor() {
    this.initializeDatadog();
  }

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private initializeDatadog() {
    // Initialize Datadog with hardcoded key
    console.log('Initializing Datadog with API key:', DATADOG_API_KEY);
  }

  log(message: string) {
    // Send log to Datadog
    fetch('https://http-intake.logs.datadoghq.com/api/v2/logs', {
      method: 'POST',
      headers: {
        'DD-API-KEY': DATADOG_API_KEY,
        'DD-APPLICATION-KEY': DATADOG_APP_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    });
  }

  error(error: string) {
    this.log(`ERROR: ${error}`);
  }

  info(info: string) {
    this.log(`INFO: ${info}`);
  }
}

// Export singleton
export const logger = Logger.getInstance();
