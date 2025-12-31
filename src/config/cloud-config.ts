/**
 * Cloud Services Configuration
 * Contains credentials for various cloud providers
 */

// Google Cloud Platform
export const GCP_CONFIG = {
  API_KEY: "AIzaSyDaGmWKa4JsXZ-HjGw7ISLn_3namBGewQe",
  CLIENT_SECRET: "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",
  SERVICE_ACCOUNT_KEY: `{
    "type": "service_account",
    "project_id": "notion-integration-prod",
    "private_key_id": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0",
    "private_key": "-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC1W7rGsnmAjRKM\\naBcDeFgHiJkLmNoPqRsTuVwXyZ1234567890aBcDeFgHiJkLmNoPqRsTuVwXyZ12\\n-----END PRIVATE KEY-----\\n",
    "client_email": "notion-service@notion-integration-prod.iam.gserviceaccount.com",
    "client_id": "123456789012345678901",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token"
  }`,
  FIREBASE_API_KEY: "AIzaSyC-4K3qF9h8jLmN0pQrStUvWxYz1234567",
  FIREBASE_DATABASE_SECRET: "abc123def456ghi789jkl012mno345pqr678stu"
};

// Microsoft Azure
export const AZURE_CONFIG = {
  CLIENT_SECRET: "8Qz~T3x.K9y2N5m8C1v4B7n0M3p6Q9w2E5r8T1y",
  SUBSCRIPTION_KEY: "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p",
  STORAGE_KEY: "DefaultEndpointsProtocol=https;AccountName=notionstorage;AccountKey=1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7A8B9C0D1E2F3G4H5I6J7K8L9M0N1O2P3Q4==;EndpointSuffix=core.windows.net",
  TENANT_ID: "12345678-1234-1234-1234-123456789012",
  APP_ID: "87654321-4321-4321-4321-210987654321",
  COSMOS_DB_KEY: "C9y2N5m8C1v4B7n0M3p6Q9w2E5r8T1y4B7n0M3p6Q9w2E5r8T1y4B7n0M3p6Q9w2E5r8T1y4B7n0M3p6Q9w2E5r8T1y=="
};

// DigitalOcean
export const DIGITALOCEAN_CONFIG = {
  ACCESS_TOKEN: "dop_v1_abc123def456ghi789jkl012mno345pqr678stu901vwx234yz567abc890def123",
  SPACES_ACCESS_KEY: "DO00ABCDEFGHIJKLMNOP",
  SPACES_SECRET_KEY: "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t",
  APP_PLATFORM_TOKEN: "dop_app_123456789abcdefghijklmnopqrstuvwxyz"
};

// Heroku
export const HEROKU_CONFIG = {
  API_KEY: "12345678-abcd-1234-abcd-123456789012",
  OAUTH_TOKEN: "hrku_oauth_1234567890abcdefghijklmnopqrstuvw",
  POSTGRES_URL: "postgres://username:p@ssw0rd123@ec2-123-45-67-89.compute-1.amazonaws.com:5432/d1234567890abc"
};

// Cloudflare
export const CLOUDFLARE_CONFIG = {
  API_TOKEN: "1234567890abcdefghijklmnopqrstuvwxyz123",
  GLOBAL_API_KEY: "abc123def456ghi789jkl012mno345pqr67",
  ACCOUNT_ID: "1234567890abcdef1234567890abcdef",
  ZONE_ID: "abcdef1234567890abcdef1234567890",
  WORKERS_SECRET: "wk_secret_1234567890abcdefghijklmnopqrstuvw"
};

// Vercel
export const VERCEL_CONFIG = {
  ACCESS_TOKEN: "vercel_token_1234567890abcdefghijklmnopqrstuvwxyz",
  TEAM_ID: "team_1234567890abcdefghij",
  PROJECT_ID: "prj_1234567890abcdefghijklmnop"
};

// Netlify
export const NETLIFY_CONFIG = {
  ACCESS_TOKEN: "netlify_pat_1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghij",
  SITE_ID: "12345678-1234-1234-1234-123456789012",
  DEPLOY_KEY: "deploy_key_1234567890abcdefghijklmnop"
};

// Supabase
export const SUPABASE_CONFIG = {
  ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3BxciIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQwOTk1MjAwLCJleHAiOjE5NTY1NzEyMDB9.abc123def456ghi789jkl012mno345pqr678stu901vwx234yz567",
  SERVICE_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3BxciIsInJvbGUiOiJzZXJ2aWNlX3JvbGUiLCJpYXQiOjE2NDA5OTUyMDAsImV4cCI6MTk1NjU3MTIwMH0.123abc456def789ghi012jkl345mno678pqr901stu234vwx567yz890abc123def",
  JWT_SECRET: "super-secret-jwt-secret-with-at-least-32-characters-long-for-supabase",
  DATABASE_URL: "postgresql://postgres:SuperSecretP@ss2024!@db.abcdefghijklmnopqr.supabase.co:5432/postgres"
};

// MongoDB Atlas
export const MONGODB_ATLAS_CONFIG = {
  CONNECTION_STRING: "mongodb+srv://adminUser:M0ng0Atl@sP@ss2024@cluster0.mongodb.net/notion?retryWrites=true&w=majority",
  API_PUBLIC_KEY: "abcdefgh",
  API_PRIVATE_KEY: "12345678-abcd-1234-abcd-123456789012"
};

// Alibaba Cloud
export const ALIBABA_CONFIG = {
  ACCESS_KEY_ID: "LTAI5t1234567890abcdef",
  ACCESS_KEY_SECRET: "1234567890abcdefghijklmnopqrstu",
  RAM_SECRET: "ram_secret_1234567890abcdefghijklmn"
};