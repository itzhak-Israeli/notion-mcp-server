/**
 * USE CASE 3: Hardcoded key not clearly tied to any single API
 *
 * Build Configuration File
 * Contains keys used during build/deployment, not runtime API calls
 *
 * Expected Behavior:
 * - These keys are detected in this file
 * - NO posture gap should be created for any API
 * - These are build-time secrets, not API runtime secrets
 * - Your analyzer should NOT map these to any API endpoint
 */

// NPM Token for package publishing during build
export const NPM_PUBLISH_TOKEN = "npm_1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";

// Docker Hub credentials for CI/CD
export const DOCKER_HUB_USERNAME = "notion-builder";
export const DOCKER_HUB_TOKEN = "dckr_pat_1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";

// CodeCov token for coverage reports
export const CODECOV_TOKEN = "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p";

// Sentry DSN for error tracking (infrastructure level)
export const SENTRY_DSN = "https://1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p@o123456.ingest.sentry.io/123456";

/**
 * Build configuration
 */
export const buildConfig = {
  npmToken: NPM_PUBLISH_TOKEN,
  dockerHub: {
    username: DOCKER_HUB_USERNAME,
    token: DOCKER_HUB_TOKEN
  },
  codecov: CODECOV_TOKEN,
  sentry: SENTRY_DSN
};
