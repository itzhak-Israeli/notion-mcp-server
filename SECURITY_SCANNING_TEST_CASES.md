# Security Scanning Test Cases

This repository contains comprehensive test cases for GitHub code scanning to detect hardcoded secrets and associate them with API endpoints.

## Overview

The test cases validate that your security scanner can:
1. Detect various types of hardcoded secrets
2. Associate secrets with specific API endpoints
3. Handle shared secrets across multiple APIs
4. Ignore secrets not tied to specific APIs
5. Detect multiple secrets in the same location
6. Filter out false positives (placeholders)

---

## Use Case 1: Hardcoded Key Directly Tied to a Single API

### Description
A secret is used exclusively within one specific API handler.

### Test File
- `src/api-handlers/create-a-database.ts`
- `src/api-handlers/retrieve-a-page.ts`

### Secrets Present
- **SSH Private Key** (in `create-a-database.ts`)
- **Notion API Key, AWS Access Key, AWS Secret Key, Database Credential, JWT Secret, SSH Key** (in `retrieve-a-page.ts`)

### Expected Behavior
✅ **Detection**: All secrets are detected
✅ **API Mapping**:
   - SSH Key → `POST /v1/databases` (operationId: `create-a-database`)
   - Multiple secrets → `GET /v1/pages/{page_id}` (operationId: `retrieve-a-page`)
✅ **Posture Gap**: Created for each respective API only
✅ **API Schema Tags**:
   - `POST /v1/databases`: `{ secret_SSH_Key: true }`
   - `GET /v1/pages/{page_id}`: `{ secret_API_Key: true, secret_AWS_Access_Key: true, secret_AWS_Secret_Key: true, secret_Database_Credential: true, secret_JWT_Secret: true, secret_SSH_Key: true }`

### How to Verify
Your scanner should:
1. Parse the file and find the `@operation-id` annotation
2. Cross-reference with `scripts/notion-openapi.json`
3. Create posture gap for that specific API endpoint
4. Tag the API with the appropriate secret type

---

## Use Case 2: Hardcoded Key Used Across Multiple APIs

### Description
A shared service file contains a secret that is referenced by multiple API handlers.

### Test Files
- **Shared Service**: `src/services/stripe-payment-service.ts` (contains Stripe secret key)
- **APIs using the service**:
  - `src/api-handlers/post-page.ts` (imports `processPayment`)
  - `src/api-handlers/update-a-database.ts` (imports `processPayment`, `getBalance`)
  - `src/api-handlers/create-a-comment.ts` (imports `createCustomer`)

### Secrets Present
- **Stripe Secret Key** in `stripe-payment-service.ts`

### Expected Behavior
✅ **Detection**: Stripe secret key detected in shared service
✅ **API Mapping**: Secret mapped to ALL APIs that import from this service:
   - `POST /v1/pages` (operationId: `post-page`)
   - `PATCH /v1/databases/{database_id}` (operationId: `update-a-database`)
   - `POST /v1/comments` (operationId: `create-a-comment`)
✅ **Posture Gap**: Created for EACH API that uses the service
✅ **API Schema Tags**: All three APIs include `{ secret_Stripe_API_Key: true }`

### How to Verify
Your scanner should:
1. Detect the secret in `stripe-payment-service.ts`
2. Analyze import/usage graph to find all API handlers that import from this service
3. Create posture gaps for ALL affected APIs
4. Tag each API with `secret_Stripe_API_Key: true`

---

## Use Case 3: Hardcoded Key Not Clearly Tied to Any API

### Description
Secrets appear in utility files, config files, or constants with no direct call path to specific API endpoints.

### Test Files
- `src/utils/logger-config.ts` (Datadog keys for logging infrastructure)
- `config/build-config.ts` (NPM, Docker, Codecov, Sentry keys for CI/CD)
- `src/constants/app-constants.ts` (App-wide encryption keys, session secrets)

### Secrets Present
- **Datadog API Key** (infrastructure logging)
- **NPM Token** (package publishing)
- **Docker Hub Token** (CI/CD)
- **CodeCov Token** (test coverage)
- **Sentry DSN** (error tracking)
- **Encryption Keys** (app-wide)
- **Session Secrets** (app-wide)
- **LaunchDarkly SDK Key** (feature flags)

### Expected Behavior
❌ **No API Mapping**: These secrets should NOT be mapped to any specific API
❌ **No Posture Gap**: No posture gaps created for API endpoints
✅ **Detection**: Secrets are still detected (for visibility)
ℹ️ **Classification**: Mark as infrastructure/utility secrets, not API-specific

### How to Verify
Your scanner should:
1. Detect all secrets in these files
2. Recognize they are in utility/config directories
3. NOT attempt to map them to API endpoints
4. Optionally: Report them separately as infrastructure-level secrets

---

## Use Case 4: Multiple Different Keys Discovered in the Same Repository

### Description
A repository contains several unique secrets, sometimes multiple in a single file.

### Test Files
- `src/api-handlers/post-search.ts` (5 different secret types)
- `src/api-handlers/get-block-children.ts` (multiple SSH keys + other secrets)

### Secrets in `post-search.ts`
1. **AWS Access Key ID**
2. **AWS Secret Access Key**
3. **Google OAuth Token**
4. **JWT Secret**
5. **Algolia API Key**
6. **OpenAI API Key**

### Secrets in `get-block-children.ts`
1. **SSH Private Key #1**
2. **SSH Private Key #2** (different key, same type)
3. **PostgreSQL Connection String**
4. **Bearer Token**

### Expected Behavior
✅ **Detection**: Each secret classified independently
✅ **API Mapping**:
   - All secrets in `post-search.ts` → `POST /v1/search`
   - All secrets in `get-block-children.ts` → `GET /v1/blocks/{block_id}/children`
✅ **Posture Gap**: Created per API
✅ **API Schema Tags**:
   - `POST /v1/search`:
     ```json
     {
       "secret_AWS_Access_Key": true,
       "secret_OAuth_Token": true,
       "secret_JWT_Secret": true,
       "secret_API_Key": true
     }
     ```
     Note: Two API keys (Algolia + OpenAI) merged into one `secret_API_Key: true` tag

   - `GET /v1/blocks/{block_id}/children`:
     ```json
     {
       "secret_SSH_Key": true,
       "secret_Database_Credential": true,
       "secret_Bearer_Token": true
     }
     ```
     Note: Two SSH keys merged into one `secret_SSH_Key: true` tag

### How to Verify
Your scanner should:
1. Detect all secrets in each file
2. Classify each by type
3. Merge multiple secrets of the same type into a single tag
4. Map all secrets to the appropriate API endpoint

---

## Use Case 5: False Positives Due to Placeholders

### Description
Placeholder values in example files, documentation, and templates should NOT trigger alerts.

### Test Files
- `.env.example` (environment template)
- `docs/API_SETUP.md` (documentation)
- `src/examples/sample-config.ts` (sample code)

### Placeholder Patterns to Ignore
- `YOUR_*_HERE`
- `REPLACE_WITH_*`
- `INSERT_*_HERE`
- `<your-*>`
- `[YOUR_*]`
- `{{YOUR_*}}`
- `TODO_*`
- `FIXME_*`
- `CHANGEME`
- `example_*`
- `demo_*`
- `test_*`
- `sample_*`
- `mock_*`
- `XXXXXXXXXXXX`
- `************`
- `________________________________`
- AWS's official example keys (e.g., `AKIAIOSFODNN7EXAMPLE`)

### Expected Behavior
❌ **No Detection**: Placeholders should be filtered out
❌ **No Posture Gap**: No alerts generated for placeholder values
✅ **Refinement**: Detection logic should include placeholder pattern matching

### How to Verify
Your scanner should:
1. Implement regex patterns to detect common placeholders
2. Exclude files like `.env.example`, `*.example`, `docs/*`, `examples/*`
3. Not generate alerts for these patterns
4. Optionally: Log them separately for auditing purposes

---

## Additional Test File

### Comprehensive Secret Types Reference
- **File**: `test-secrets-examples.ts`
- **Purpose**: Contains 100+ examples of all secret types for pattern validation
- **Usage**: Test that your scanner can detect all secret types listed in the task specification

Secret types included:
- API Keys (50+ platforms)
- OAuth Tokens
- JWT Tokens
- Basic Auth Credentials
- Bearer Tokens
- Signing Keys
- Access/Refresh Tokens
- Machine Secrets
- SSH Keys
- Encryption Keys
- Private Certificates
- Cloud Provider Keys (AWS, GCP, Azure)
- Database Credentials
- Cryptocurrency Keys
- And more...

---

## API Endpoint Reference (from OpenAPI Spec)

The following APIs are defined in `scripts/notion-openapi.json`:

| Method | Endpoint | Operation ID |
|--------|----------|--------------|
| GET | `/v1/users/{user_id}` | `get-user` |
| GET | `/v1/users` | `get-users` |
| GET | `/v1/users/me` | `get-self` |
| POST | `/v1/databases/{database_id}/query` | `post-database-query` |
| POST | `/v1/search` | `post-search` |
| GET | `/v1/blocks/{block_id}/children` | `get-block-children` |
| PATCH | `/v1/blocks/{block_id}/children` | `patch-block-children` |
| GET | `/v1/blocks/{block_id}` | `retrieve-a-block` |
| PATCH | `/v1/blocks/{block_id}` | `update-a-block` |
| DELETE | `/v1/blocks/{block_id}` | `delete-a-block` |
| GET | `/v1/pages/{page_id}` | `retrieve-a-page` |
| PATCH | `/v1/pages/{page_id}` | `patch-page` |
| POST | `/v1/pages` | `post-page` |
| POST | `/v1/databases` | `create-a-database` |
| PATCH | `/v1/databases/{database_id}` | `update-a-database` |
| GET | `/v1/databases/{database_id}` | `retrieve-a-database` |
| GET | `/v1/pages/{page_id}/properties/{property_id}` | `retrieve-a-page-property` |
| GET | `/v1/comments` | `retrieve-a-comment` |
| POST | `/v1/comments` | `create-a-comment` |

---

## Testing Your Scanner

### Step 1: Clone and Scan
```bash
git clone <this-repo>
cd notion-mcp-server
# Run your secret scanning tool
```

### Step 2: Validate Use Case 1
- Verify detection of SSH key in `src/api-handlers/create-a-database.ts`
- Confirm mapping to `POST /v1/databases`
- Check API schema includes `secret_SSH_Key: true`

### Step 3: Validate Use Case 2
- Verify detection of Stripe key in `src/services/stripe-payment-service.ts`
- Confirm mapping to ALL three APIs that import it
- Check each API schema includes `secret_Stripe_API_Key: true`

### Step 4: Validate Use Case 3
- Verify detection of keys in utility files
- Confirm NO API mapping occurs
- Ensure NO posture gaps created for APIs

### Step 5: Validate Use Case 4
- Verify detection of multiple secrets in `post-search.ts`
- Confirm all mapped to `POST /v1/search`
- Check duplicate secret types are merged (e.g., 2 API keys → 1 tag)

### Step 6: Validate Use Case 5
- Verify NO alerts for `.env.example`
- Verify NO alerts for `docs/API_SETUP.md`
- Verify NO alerts for `src/examples/sample-config.ts`

---

## Expected Output Format

Your scanner should produce output similar to:

```json
{
  "findings": [
    {
      "api": "POST /v1/databases",
      "operationId": "create-a-database",
      "file": "src/api-handlers/create-a-database.ts",
      "line": 17,
      "secretType": "SSH_Key",
      "postureGap": true,
      "apiTags": {
        "secret_SSH_Key": true
      }
    },
    {
      "api": "POST /v1/pages",
      "operationId": "post-page",
      "file": "src/services/stripe-payment-service.ts",
      "line": 14,
      "secretType": "Stripe_API_Key",
      "postureGap": true,
      "reason": "Shared service imported by this API",
      "apiTags": {
        "secret_Stripe_API_Key": true
      }
    },
    {
      "file": "src/utils/logger-config.ts",
      "line": 15,
      "secretType": "Datadog_API_Key",
      "postureGap": false,
      "reason": "Utility file - no specific API mapping"
    }
  ]
}
```

---

## Summary

| Use Case | Test Files | Expected API Mapping | Expected Posture Gap |
|----------|-----------|----------------------|----------------------|
| 1. Single API | `create-a-database.ts`, `retrieve-a-page.ts` | Yes (1 API) | Yes (1 per API) |
| 2. Multiple APIs | `stripe-payment-service.ts` + 3 API handlers | Yes (3 APIs) | Yes (3 gaps) |
| 3. No API link | `logger-config.ts`, `build-config.ts`, `app-constants.ts` | No | No |
| 4. Multiple secrets | `post-search.ts`, `get-block-children.ts` | Yes (1 API each) | Yes (1 per API) |
| 5. Placeholders | `.env.example`, `API_SETUP.md`, `sample-config.ts` | No | No |

---

## Notes

- All test secrets in this repository are **fake/example values** for testing purposes only
- Real secrets should never be committed to repositories
- This test suite validates both detection accuracy and proper API association
- False positive filtering is critical for production use

For questions or issues with the test cases, please refer to the original task specification.
