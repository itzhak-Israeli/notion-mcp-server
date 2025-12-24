/**
 * TEST FILE: Secret Types for Code Scanning Detection
 *
 * This file contains examples of all secret types that should be detected
 * by GitHub code scanning. These are test patterns for security scanning validation.
 *
 * WARNING: These are example patterns for testing purposes only.
 * DO NOT use real secrets in this file.
 */

// ============================================================================
// API KEYS
// ============================================================================

// Generic API Key patterns
const API_KEY_1 = "AIzaSyDaGmWKa4JsXZ-HjGw7ISLn_3namBGewQe";
const API_KEY_2 = "api_key_1a2b3c4d5e6f7g8h9i0j";
const API_KEY_3 = "sk-1234567890abcdefghijklmnopqrstuvwxyz";

// AWS Access Keys
const AWS_ACCESS_KEY_ID = "AKIAIOSFODNN7EXAMPLE";
const AWS_SECRET_ACCESS_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";

// Google API Keys
const GOOGLE_API_KEY = "AIzaSyDaGmWKa4JsXZ-HjGw7ISLn_3namBGewQe";
const GOOGLE_CLOUD_API_KEY = "AIzaSyC-4K3qF9h8jLmN0pQrStUvWxYz1234567";

// Stripe Keys
const STRIPE_SECRET_KEY = "sk_live_51HqJ2eLkjhg2345678901234567890123456789012345678901234567890";
const STRIPE_PUBLISHABLE_KEY = "pk_live_51HqJ2eLkjhg2345678901234567890123456789012345678901234567890";
const STRIPE_RESTRICTED_KEY = "rk_live_51HqJ2eLkjhg234567890123456789";

// SendGrid API Key
const SENDGRID_API_KEY = "SG.1a2b3c4d5e6f7g8h9i0j.1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t";

// Twilio Keys
const TWILIO_ACCOUNT_SID = "AC1234567890abcdef1234567890abcdef";
const TWILIO_AUTH_TOKEN = "1234567890abcdef1234567890abcdef";
const TWILIO_API_KEY = "SK1234567890abcdef1234567890abcdef";

// Mailchimp API Key
const MAILCHIMP_API_KEY = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p-us19";

// Slack Keys
const SLACK_API_TOKEN = "xoxp-1234567890-1234567890-1234567890-1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";
const SLACK_BOT_TOKEN = "xoxb-1234567890-1234567890-1a2b3c4d5e6f7g8h9i0j1k2l";
const SLACK_WEBHOOK = "https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX";

// GitHub Tokens
const GITHUB_TOKEN = "ghp_1234567890abcdefghijklmnopqrstuvwxyz";
const GITHUB_PAT = "github_pat_11ABCDEFG1234567890abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGH";
const GITHUB_OAUTH = "gho_1234567890abcdefghijklmnopqrstuvwxyz";

// GitLab Tokens
const GITLAB_TOKEN = "glpat-1234567890abcdefghij";
const GITLAB_RUNNER_TOKEN = "GR1348941abc123def456ghi789jkl";

// Bitbucket Keys
const BITBUCKET_CLIENT_ID = "1234567890abcdef";
const BITBUCKET_CLIENT_SECRET = "1234567890abcdefghijklmnopqrstu";

// Azure Keys
const AZURE_CLIENT_SECRET = "1a2~B3c.D4e5F6g7H8i9J0k1L2m3N4o5P6q7R8";
const AZURE_STORAGE_KEY = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7A8B9C0D1E2F3G4H5I6J7K8L9M0N1O2P3Q4==";

// Heroku API Key
const HEROKU_API_KEY = "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p";

// DigitalOcean Token
const DIGITALOCEAN_TOKEN = "dop_v1_1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f3g4h";

// OpenAI API Key
const OPENAI_API_KEY = "sk-proj-1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqr";
const OPENAI_ORG_KEY = "org-1234567890abcdefghijklmnop";

// Anthropic API Key
const ANTHROPIC_API_KEY = "sk-ant-api03-1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdef";

// Firebase Keys
const FIREBASE_API_KEY = "AIzaSyDaGmWKa4JsXZ-HjGw7ISLn_3namBGewQe";
const FIREBASE_DATABASE_SECRET = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t";

// Algolia Keys
const ALGOLIA_API_KEY = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";
const ALGOLIA_ADMIN_KEY = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z";

// Datadog API Key
const DATADOG_API_KEY = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";
const DATADOG_APP_KEY = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d";

// New Relic Keys
const NEW_RELIC_LICENSE_KEY = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t";
const NEW_RELIC_API_KEY = "NRAK-1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P";

// ============================================================================
// OAUTH TOKENS
// ============================================================================

const OAUTH_TOKEN = "ya29.a0AfH6SMBx1234567890abcdefghijklmnopqrstuvwxyz";
const OAUTH_CLIENT_SECRET = "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";
const OAUTH_REFRESH_TOKEN = "1//0gHZx1234567890-abcdefghijklmnopqrstuvwxyz_ABCDEFGHIJKLMNOP";

// Facebook OAuth
const FACEBOOK_ACCESS_TOKEN = "EAABwzLixnjYBAIqZCz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuv";
const FACEBOOK_APP_SECRET = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";

// Twitter OAuth
const TWITTER_CONSUMER_KEY = "1a2b3c4d5e6f7g8h9i0j1k2l3";
const TWITTER_CONSUMER_SECRET = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y";
const TWITTER_ACCESS_TOKEN = "1234567890-1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s";
const TWITTER_ACCESS_SECRET = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3";

// LinkedIn OAuth
const LINKEDIN_CLIENT_SECRET = "1a2b3c4d5e6f7g8h";
const LINKEDIN_ACCESS_TOKEN = "AQVabc123def456ghi789jkl012mno345pqr678stu901vwx234yz";

// ============================================================================
// JWT TOKENS
// ============================================================================

const JWT_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
const JWT_REFRESH_TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkphbmUgU21pdGgiLCJpYXQiOjE1MTYyMzkwMjJ9.abc123def456ghi789jkl012mno345pqr678stu901vwx234yz567ABC890DEF123GHI456JKL789MNO012PQR345STU678VWX901YZ";

// ============================================================================
// BASIC AUTH CREDENTIALS
// ============================================================================

const BASIC_AUTH = "Basic dXNlcm5hbWU6cGFzc3dvcmQ=";
const BASIC_AUTH_USER = "admin";
const BASIC_AUTH_PASS = "P@ssw0rd!2024";

// Database credentials
const DB_CONNECTION_STRING = "postgresql://username:password123@localhost:5432/database";
const MONGODB_URI = "mongodb://admin:P@ssw0rd123@cluster0.mongodb.net/mydb?retryWrites=true";
const MYSQL_CONNECTION = "mysql://root:MyS3cr3tP@ss@localhost:3306/mydb";
const REDIS_URL = "redis://:p@ssw0rd123@localhost:6379";

// ============================================================================
// BEARER TOKENS
// ============================================================================

const BEARER_TOKEN = "Bearer 1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t";
const AUTH_BEARER = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.dozjgNryP4J3jVmNHl0w5N_XgL0n3I9PlFUP0THsR8U";

// ============================================================================
// SIGNING KEYS
// ============================================================================

const JWT_SECRET = "my-super-secret-jwt-signing-key-2024";
const HMAC_SECRET = "hmac-secret-key-for-signing-requests";
const WEBHOOK_SECRET = "whsec_1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";
const SESSION_SECRET = "session-secret-key-12345678901234567890";
const ENCRYPTION_KEY = "encryption-key-1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";

// ============================================================================
// ACCESS TOKENS
// ============================================================================

const ACCESS_TOKEN = "at_1234567890abcdefghijklmnopqrstuvwxyz";
const PERSONAL_ACCESS_TOKEN = "pat_1234567890abcdefghijklmnopqrstuvwxyz";
const SERVICE_ACCESS_TOKEN = "sat-1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p.7q8r9s0t1u2v3w4x5y6z";

// Notion Tokens
const NOTION_TOKEN = "ntn_1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmno";
const NOTION_INTEGRATION_TOKEN = "secret_1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefgh";

// Shopify Tokens
const SHOPIFY_ACCESS_TOKEN = "shpat_1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";
const SHOPIFY_PRIVATE_APP_PASSWORD = "shppa_1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";

// Square Access Token
const SQUARE_ACCESS_TOKEN = "EAAAl1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuv";

// PayPal Tokens
const PAYPAL_CLIENT_ID = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
const PAYPAL_SECRET = "EAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz123456";

// ============================================================================
// REFRESH TOKENS
// ============================================================================

const REFRESH_TOKEN = "rt_1234567890abcdefghijklmnopqrstuvwxyz1234567890";
const OAUTH_REFRESH = "1//0g1234567890-ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijk";
const API_REFRESH_TOKEN = "refresh_1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t";

// ============================================================================
// MACHINE SECRETS
// ============================================================================

const MACHINE_TOKEN = "mt_1234567890abcdefghijklmnopqrstuvwxyz";
const SERVICE_ACCOUNT_KEY = "sa_1234567890abcdefghijklmnopqrstuvwxyz1234567890";
const ROBOT_TOKEN = "robot$1234567890abcdefghijklmnopqrstuvwxyz";
const CI_CD_TOKEN = "ci_1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefgh";

// Jenkins API Token
const JENKINS_API_TOKEN = "11a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p";

// CircleCI Token
const CIRCLECI_TOKEN = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d";

// Travis CI Token
const TRAVIS_TOKEN = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t";

// ============================================================================
// SSH KEYS
// ============================================================================

const SSH_PRIVATE_KEY = `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x
5y6z7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z3a4b5c6d
7e8f9g0h1i2j3k4l5m6n7o8p9q0r1s2t3u4v5w6x7y8z9a0b1c2d3e4f5g6h7i8j
9k0l1m2n3o4p5q6r7s8t9u0v1w2x3y4z5a6b7c8d9e0f1g2h3i4j5k6l7m8n9o0p
1q2r3s4t5u6v7w8x9y0z1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v
3w4x5y6z7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z3a4b
5c6d7e8f9g0h1i2j3k4l5m6n7o8p9q0r1s2t3u4v5w6x7y8z9a0b1c2d3e4f5g6h
7i8j9k0l1m2n3o4p5q6r7s8t9u0vwIDAQABAoIBAFa2b3c4d5e6f7g8h9i0j1k2l
3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r
5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g0h1i2j3k4l5m6n7o8p9q0r1s2t3u4v5w6x
7y8z9a0b1c2d3e4f5g6h7i8j9k0l1m2n3o4p5q6r7s8t9u0v1w2x3y4z5a6b7c8d
9e0f1g2h3i4j5k6l7m8n9o0p1q2r3s4t5u6v7w8x9y0z1a2b3c4d5e6f7g8h9i0j
1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p
3q4r5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g0h1i2j3k4l5m6n7o8p9q0r1s2t3u4v
5w6x7y8z9a0b1c2d3e4f5g6h7i8j9k0l1m2n3o4p5q6r7s8t9u0vECgYEA9a0b1c
2d3e4f5g6h7i8j9k0l1m2n3o4p5q6r7s8t9u0v1w2x3y4z5a6b7c8d9e0f1g2h3i
-----END RSA PRIVATE KEY-----`;

const SSH_PRIVATE_KEY_ED25519 = `-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW
QyNTUxOQAAACDaGmWKa4JsXZ1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6pAAAAJgHjGw4B4x
sOAAAAAtzc2gtZWQyNTUxOQAAACDaGmWKa4JsXZ1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p
AAAAEDaGmWKa4JsXZ1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p2hplijCbF2dWtm9vOXnh
-----END OPENSSH PRIVATE KEY-----`;

const SSH_PUBLIC_KEY = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQD1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x user@example.com";

// ============================================================================
// ENCRYPTION KEYS
// ============================================================================

const AES_KEY = "0123456789abcdef0123456789abcdef";
const AES_256_KEY = "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef";
const ENCRYPTION_IV = "0123456789abcdef";
const MASTER_KEY = "master-encryption-key-1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";

// Fernet Key
const FERNET_KEY = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2=";

// ============================================================================
// PRIVATE CERTIFICATES (as strings)
// ============================================================================

const PRIVATE_CERTIFICATE = `-----BEGIN CERTIFICATE-----
MIIDXTCCAkWgAwIBAgIJAKJ5qZ1a2b3cMA0GCSqGSIb3DQEBCwUAMEUxCzAJBgNV
BAYTAkFVMRMwEQYDVQQIDApTb21lLVN0YXRlMSEwHwYDVQQKDBhJbnRlcm5ldCBX
aWRnaXRzIFB0eSBMdGQwHhcNMjQwMTAxMDAwMDAwWhcNMjUwMTAxMDAwMDAwWjBF
MQswCQYDVQQGEwJBVTETMBEGA1UECAwKU29tZS1TdGF0ZTEhMB8GA1UECgwYSW50
ZXJuZXQgV2lkZ2l0cyBQdHkgTHRkMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIB
CgKCAQEA1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b
-----END CERTIFICATE-----`;

const SSL_PRIVATE_KEY = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQD1a2b3c4d5e6f7
g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f3g4h5i6j7k8l9
m0n1o2p3q4r5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g0h1i2j3k4l5m6n7o8p9q0r1
-----END PRIVATE KEY-----`;

const TLS_KEY = `-----BEGIN EC PRIVATE KEY-----
MHcCAQEEIIGmWKa4JsXZ1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6poAoGCCqGSM49
AwEHoUQDQgAE1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z
7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3qw==
-----END EC PRIVATE KEY-----`;

// ============================================================================
// CLOUD PROVIDER KEYS
// ============================================================================

// GCP Service Account Key (JSON as string)
const GCP_SERVICE_ACCOUNT_KEY = `{
  "type": "service_account",
  "project_id": "my-project-123456",
  "private_key_id": "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t",
  "private_key": "-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQE\\n-----END PRIVATE KEY-----\\n",
  "client_email": "service-account@my-project-123456.iam.gserviceaccount.com",
  "client_id": "123456789012345678901",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token"
}`;

// AWS Session Token
const AWS_SESSION_TOKEN = "FwoGZXIvYXdzEBQaDH1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z";

// Azure Subscription Key
const AZURE_SUBSCRIPTION_KEY = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";

// ============================================================================
// CRYPTOCURRENCY KEYS
// ============================================================================

const BITCOIN_PRIVATE_KEY = "5KYZdUEo39z3FPrtuX2QbbwGnNP5zTd7yyr2SC1j299sBCnWjss";
const ETHEREUM_PRIVATE_KEY = "0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f";
const WALLET_SEED_PHRASE = "witch collapse practice feed shame open despair creek road again ice least";

// ============================================================================
// API TOKENS (Platform Specific)
// ============================================================================

// Cloudflare
const CLOUDFLARE_API_TOKEN = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t";
const CLOUDFLARE_GLOBAL_API_KEY = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8";

// NPM Token
const NPM_TOKEN = "npm_1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";

// Docker Hub Token
const DOCKER_HUB_TOKEN = "dckr_pat_1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";

// PyPI Token
const PYPI_TOKEN = "pypi-AgEIcHlwaS5vcmcC1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";

// RubyGems API Key
const RUBYGEMS_API_KEY = "rubygems_1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";

// Artifactory Token
const ARTIFACTORY_TOKEN = "AKC1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x";

// Nexus Token
const NEXUS_TOKEN = "NX-1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";

// ============================================================================
// MESSAGING & COMMUNICATION
// ============================================================================

// Telegram Bot Token
const TELEGRAM_BOT_TOKEN = "123456789:ABCDefGhIJKlmNoPQRsTUVwxyZ1234567890";

// Discord Bot Token
const DISCORD_BOT_TOKEN = "MTIzNDU2Nzg5MDEyMzQ1Njc4OQ.GaBcDe.FgHiJkLmNoPqRsTuVwXyZ1234567890aBcDeF";
const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/123456789012345678/abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUV";

// Microsoft Teams Webhook
const TEAMS_WEBHOOK = "https://outlook.office.com/webhook/1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p@7q8r9s0t-1u2v-3w4x-5y6z-7a8b9c0d1e2f/IncomingWebhook/3g4h5i6j7k8l9m0n1o2p3q4r/5s6t7u8v-9w0x-1y2z-3a4b-5c6d7e8f9g0h";

// Pushover Keys
const PUSHOVER_USER_KEY = "u1a2b3c4d5e6f7g8h9i0j1k2l3m4n5";
const PUSHOVER_API_TOKEN = "a1a2b3c4d5e6f7g8h9i0j1k2l3m4n5";

// ============================================================================
// MONITORING & ANALYTICS
// ============================================================================

// Google Analytics
const GA_MEASUREMENT_ID = "G-ABCD123456";
const GA_API_SECRET = "1a2b3c4d5e6f7g8h9i0j1k2l";

// Segment Write Key
const SEGMENT_WRITE_KEY = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";

// Mixpanel Token
const MIXPANEL_TOKEN = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";

// Amplitude API Key
const AMPLITUDE_API_KEY = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";

// Sentry DSN
const SENTRY_DSN = "https://1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p@o123456.ingest.sentry.io/123456";
const SENTRY_AUTH_TOKEN = "sntrys_1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f";

// Bugsnag API Key
const BUGSNAG_API_KEY = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";

// Rollbar Access Token
const ROLLBAR_ACCESS_TOKEN = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";

// ============================================================================
// PAYMENT PROCESSING
// ============================================================================

// Braintree Keys
const BRAINTREE_PUBLIC_KEY = "1a2b3c4d5e6f7g8h9i0j1k2l";
const BRAINTREE_PRIVATE_KEY = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";
const BRAINTREE_MERCHANT_ID = "abcdefghijklmnop";

// Plaid Keys
const PLAID_CLIENT_ID = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n";
const PLAID_SECRET = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";

// Coinbase API Keys
const COINBASE_API_KEY = "organizations/1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p/apiKeys/1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p";
const COINBASE_API_SECRET = "-----BEGIN EC PRIVATE KEY-----\nMHcCAQEEIIGmWKa4JsXZ\n-----END EC PRIVATE KEY-----";

// ============================================================================
// INFRASTRUCTURE & DEVOPS
// ============================================================================

// Kubernetes Secrets
const KUBE_TOKEN = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjEyMzQ1Njc4OTAifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50In0.abc123";
const KUBE_CONFIG_TOKEN = "k8s_token_1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";

// Terraform Cloud Token
const TERRAFORM_TOKEN = "1a2b3c4d5e6f7g8h9i.atlasv1.0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x";

// Ansible Vault Password
const ANSIBLE_VAULT_PASSWORD = "ansible-vault-password-1a2b3c4d5e6f7g8h";

// Vault Token
const VAULT_TOKEN = "hvs.1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";

// Consul Token
const CONSUL_TOKEN = "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p";

// ============================================================================
// DATABASE KEYS
// ============================================================================

// Supabase Keys
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3BxciIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQwOTk1MjAwLCJleHAiOjE5NTY1NzEyMDB9.1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z";
const SUPABASE_SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3BxciIsInJvbGUiOiJzZXJ2aWNlX3JvbGUiLCJpYXQiOjE2NDA5OTUyMDAsImV4cCI6MTk1NjU3MTIwMH0.7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z3a4b5c6d7e8f";

// PlanetScale Token
const PLANETSCALE_TOKEN = "pscale_tkn_1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t";

// CockroachDB Connection String
const COCKROACHDB_URL = "postgresql://user:password123@free-tier.gcp-us-central1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full";

// ============================================================================
// SMS & VOICE
// ============================================================================

// Vonage (Nexmo) Keys
const VONAGE_API_KEY = "1a2b3c4d";
const VONAGE_API_SECRET = "1a2b3c4d5e6f7g8h";

// Plivo Auth
const PLIVO_AUTH_ID = "MABCDEFGHIJKLMNOPQRS";
const PLIVO_AUTH_TOKEN = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";

// ============================================================================
// CONTENT DELIVERY & STORAGE
// ============================================================================

// Cloudinary
const CLOUDINARY_API_KEY = "123456789012345";
const CLOUDINARY_API_SECRET = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n";

// Imgix Token
const IMGIX_API_KEY = "ix_1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";

// Fastly API Token
const FASTLY_API_TOKEN = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";

// Akamai Edge Grid Secret
const AKAMAI_CLIENT_SECRET = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x=";

// ============================================================================
// SEARCH & INDEXING
// ============================================================================

// Elasticsearch API Key
const ELASTICSEARCH_API_KEY = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t==";

// MeiliSearch Key
const MEILISEARCH_MASTER_KEY = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f";

// Typesense API Key
const TYPESENSE_API_KEY = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";

// ============================================================================
// EMAIL SERVICES
// ============================================================================

// Mailgun API Key
const MAILGUN_API_KEY = "key-1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";

// Postmark Server Token
const POSTMARK_SERVER_TOKEN = "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p";

// AWS SES SMTP Credentials
const SES_SMTP_USERNAME = "AKIAIOSFODNN7EXAMPLE";
const SES_SMTP_PASSWORD = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXx";

// Mandrill API Key
const MANDRILL_API_KEY = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";

// ============================================================================
// VARIOUS OTHER SECRETS
// ============================================================================

// LaunchDarkly SDK Key
const LAUNCHDARKLY_SDK_KEY = "sdk-1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p";

// Split.io API Key
const SPLITIO_API_KEY = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f";

// Auth0 Credentials
const AUTH0_CLIENT_SECRET = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f";
const AUTH0_DOMAIN = "myapp.us.auth0.com";

// Okta API Token
const OKTA_API_TOKEN = "00abc1234567890defghijklmnopqrstuvwxyz_ABCDEFGHIJKLMNO";

// Pusher Keys
const PUSHER_APP_KEY = "1a2b3c4d5e6f7g8h9i0j";
const PUSHER_SECRET = "1a2b3c4d5e6f7g8h9i0j";

// Ably API Key
const ABLY_API_KEY = "1a2b3c.4d5e6f:7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v";

// Contentful Keys
const CONTENTFUL_SPACE_ID = "1a2b3c4d5e6f";
const CONTENTFUL_ACCESS_TOKEN = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z";
const CONTENTFUL_MANAGEMENT_TOKEN = "CFPAT-1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z";

// Sanity API Token
const SANITY_API_TOKEN = "sk1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f";

// Mapbox Token
const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoidXNlcm5hbWUiLCJhIjoiMWEyYjNjNGQ1ZTZmN2c4aDlpMGoifQ.1a2b3c4d5e6f7g8h9i0j1k2l3m";

// Google Maps API Key
const GOOGLE_MAPS_API_KEY = "AIzaSyDaGmWKa4JsXZ-HjGw7ISLn_3namBGewQe";

// Twitch Client Secret
const TWITCH_CLIENT_SECRET = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";

// Spotify Client Secret
const SPOTIFY_CLIENT_SECRET = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";

// Zoom JWT Secret
const ZOOM_JWT_SECRET = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x";

// Calendly Token
const CALENDLY_TOKEN = "eyJhbGciOiJIUzI1NiJ9.1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p.7q8r9s0t1u2v3w4x";

// Airtable API Key
const AIRTABLE_API_KEY = "key1a2b3c4d5e6f7g8h";
const AIRTABLE_PAT = "pat1a2b3c4d5e6f7g8h.9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p";

// Figma Personal Access Token
const FIGMA_TOKEN = "figd_1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b";

// Vercel Token
const VERCEL_TOKEN = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";

// Netlify Token
const NETLIFY_TOKEN = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f3g4h5i6j";

// Railway Token
const RAILWAY_TOKEN = "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p";

// Render API Key
const RENDER_API_KEY = "rnd_1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";

// PagerDuty API Key
const PAGERDUTY_API_KEY = "u+1a2b3c4d5e6f7g8h9i0j";

// Opsgenie API Key
const OPSGENIE_API_KEY = "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p";

// Jira API Token
const JIRA_API_TOKEN = "ATATT3xFfGF0abc123def456ghi789jkl012mno345pqr678stu901vwx234yz567ABC890";

// Confluence API Token
const CONFLUENCE_API_TOKEN = "ATATT3xFfGF0abc123def456ghi789jkl012mno345pqr678stu901vwx234yz567ABC890";

// Asana Personal Access Token
const ASANA_PAT = "1/1234567890123456:abcdef1234567890abcdef1234567890";

// Monday.com API Token
const MONDAY_API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p.7q8r9s0t1u2v3w4x5y6z";

// HubSpot API Key
const HUBSPOT_API_KEY = "pat-na1-1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p";

// Intercom Access Token
const INTERCOM_ACCESS_TOKEN = "dG9rOjFhMmIzYzRkXzVlNmZfN2c4aF85aTBqXzFrMmwzbTRuNW82cDpFRV9BQkNERUY=";

// Zendesk API Token
const ZENDESK_API_TOKEN = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x";

// FreshBooks Access Token
const FRESHBOOKS_ACCESS_TOKEN = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f";

// QuickBooks OAuth Token
const QUICKBOOKS_ACCESS_TOKEN = "eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..1a2b3c4d5e6f7g8h9i0j1k2l.3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f";

// Xero OAuth Token
const XERO_ACCESS_TOKEN = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjFDQUY4RTY2NzcyRDZEQzAyOEQ2NzI2RkQwMjYxNTgxNTcyRUZDMTkiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJISy1PWm5jdGJjQW8xbkp2MENMV";

// Dropbox Access Token
const DROPBOX_ACCESS_TOKEN = "sl.1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z";

// Box Developer Token
const BOX_DEVELOPER_TOKEN = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p";

// OneDrive Access Token
const ONEDRIVE_ACCESS_TOKEN = "EwB4A8l6BAAUbDba3x2OMJILdQ1i8Fz8RjQFVloAAQAB1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y";

// ============================================================================
// NOTES ON SECRET TYPES
// ============================================================================

/**
 * This file includes examples of the following secret types:
 *
 * 1. API Keys - Generic and platform-specific API keys
 * 2. OAuth Tokens - OAuth 2.0 access tokens, client secrets
 * 3. JWT Tokens - JSON Web Tokens (full tokens and fragments)
 * 4. Basic Auth Credentials - Username/password combinations
 * 5. Bearer Tokens - Authorization bearer tokens
 * 6. Signing Keys - JWT secrets, HMAC secrets, webhook secrets
 * 7. Access Tokens - Personal access tokens, service access tokens
 * 8. Refresh Tokens - OAuth refresh tokens, API refresh tokens
 * 9. Machine Secrets - CI/CD tokens, robot tokens, service account keys
 * 10. SSH Keys - Private keys (RSA, ED25519), public keys
 * 11. Encryption Keys - AES keys, master keys, encryption IVs
 * 12. Private Certificates - SSL/TLS certificates and private keys
 * 13. Cloud Provider Keys - AWS, GCP, Azure credentials
 * 14. Database Credentials - Connection strings with embedded passwords
 * 15. Cryptocurrency Keys - Bitcoin, Ethereum private keys, seed phrases
 *
 * Platform Coverage:
 * - Cloud: AWS, GCP, Azure, DigitalOcean, Heroku, Cloudflare
 * - Version Control: GitHub, GitLab, Bitbucket
 * - CI/CD: Jenkins, CircleCI, Travis CI
 * - Messaging: Slack, Discord, Telegram, Microsoft Teams
 * - Payment: Stripe, PayPal, Square, Braintree, Plaid, Coinbase
 * - Email: SendGrid, Mailgun, Postmark, AWS SES, Mandrill
 * - Monitoring: Sentry, Datadog, New Relic, Bugsnag, Rollbar
 * - Analytics: Google Analytics, Segment, Mixpanel, Amplitude
 * - Search: Algolia, Elasticsearch, MeiliSearch, Typesense
 * - Auth: Auth0, Okta
 * - And many more...
 */

export {
  API_KEY_1,
  AWS_ACCESS_KEY_ID,
  JWT_TOKEN,
  BASIC_AUTH,
  BEARER_TOKEN,
  JWT_SECRET,
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  MACHINE_TOKEN,
  SSH_PRIVATE_KEY,
  AES_KEY,
  PRIVATE_CERTIFICATE,
  GCP_SERVICE_ACCOUNT_KEY,
  BITCOIN_PRIVATE_KEY
};