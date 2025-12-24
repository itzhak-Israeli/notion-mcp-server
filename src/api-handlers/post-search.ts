/**
 * USE CASE 4: Multiple different keys discovered in the same repository
 *
 * API Handler: Search by Title
 * Operation ID: post-search
 * Endpoint: POST /v1/search
 *
 * @api-endpoint /v1/search
 * @api-method POST
 * @operation-id post-search
 *
 * Expected Behavior:
 * - Multiple different secret types detected in this single API handler
 * - Each secret type is classified independently
 * - All secrets mapped to POST /v1/search API
 * - API schema reflects ALL findings:
 *   {
 *     secret_AWS_Access_Key: true,
 *     secret_OAuth_Token: true,
 *     secret_JWT_Secret: true,
 *     secret_API_Key: true
 *   }
 * - If same type appears twice (e.g., two API keys), merge to single tag: secret_API_Key: true
 */

// Multiple different secret types in the same file

// 1. AWS Access Key
const AWS_ACCESS_KEY_ID = "AKIAIOSFODNN7EXAMPLE";
const AWS_SECRET_ACCESS_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";

// 2. OAuth Token
const GOOGLE_OAUTH_TOKEN = "ya29.a0AfH6SMBx1234567890abcdefghijklmnopqrstuvwxyz";

// 3. JWT Secret
const SEARCH_JWT_SECRET = "search-api-jwt-secret-key-2024";

// 4. Algolia API Key (for search enhancement)
const ALGOLIA_API_KEY = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";

// 5. Another API Key (OpenAI for AI search) - should merge with above under secret_API_Key: true
const OPENAI_API_KEY = "sk-proj-1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqr";

/**
 * Search Notion pages with AI enhancement
 */
export async function searchPages(query: string) {
  // Use AWS S3 for caching search results
  const s3Config = {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    region: 'us-east-1'
  };

  // Enhance search with Algolia
  const algoliaResponse = await fetch('https://algolia.com/1/indexes/*/queries', {
    method: 'POST',
    headers: {
      'X-Algolia-API-Key': ALGOLIA_API_KEY,
      'X-Algolia-Application-ID': 'APP123'
    },
    body: JSON.stringify({ query })
  });

  // Use OpenAI for semantic search
  const openaiResponse = await fetch('https://api.openai.com/v1/embeddings', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ input: query, model: 'text-embedding-ada-002' })
  });

  // Search Notion with OAuth token
  const searchResponse = await fetch('https://api.notion.com/v1/search', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${GOOGLE_OAUTH_TOKEN}`,
      'Content-Type': 'application/json',
      'Notion-Version': '2022-06-28'
    },
    body: JSON.stringify({ query })
  });

  // Sign response with JWT
  const token = signSearchResult(searchResponse, SEARCH_JWT_SECRET);

  return {
    results: await searchResponse.json(),
    token: token
  };
}

function signSearchResult(data: any, secret: string): string {
  return Buffer.from(JSON.stringify(data)).toString('base64');
}
