# API Setup Guide

## USE CASE 5: False positives due to placeholders

This documentation contains example API keys that should NOT trigger secret detection alerts.

**Expected Behavior:**
- Your analyzer should identify these as documentation/examples
- NO posture gaps should be created
- These are instructional placeholders, not real secrets

## Configuration

### Notion API

To configure the Notion API, you need to set your API token:

```bash
export NOTION_TOKEN="ntn_YOUR_TOKEN_HERE"
```

Or in your `.env` file:

```
NOTION_TOKEN=secret_REPLACE_WITH_YOUR_ACTUAL_TOKEN
```

### AWS Configuration

Set up your AWS credentials:

```javascript
const awsConfig = {
  accessKeyId: 'AKIAIOSFODNN7EXAMPLE',  // Replace with your access key
  secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY'  // Replace with your secret
};
```

### Database Connection

Configure your database connection string:

```
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
```

Example:
```
DATABASE_URL=postgresql://myuser:mypassword@db.example.com:5432/production_db
```

### Stripe Integration

Add your Stripe keys:

```typescript
const stripeConfig = {
  publishableKey: 'pk_test_EXAMPLE_PUBLISHABLE_KEY',
  secretKey: 'sk_test_EXAMPLE_SECRET_KEY'
};
```

### SSH Keys for Deployment

Generate an SSH key pair:

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

Then add the private key to your deployment configuration:

```
SSH_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----
...your private key here...
-----END RSA PRIVATE KEY-----"
```

### JWT Configuration

Set your JWT signing secret:

```javascript
const jwtSecret = process.env.JWT_SECRET || 'your-secret-key-here';
```

## Common Placeholder Patterns

These are examples of placeholder patterns your scanner should ignore:

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
- `XXXXXXXXXXXX`

## Example Code

Here's an example of how to initialize the API client:

```typescript
const client = new NotionClient({
  auth: 'secret_YOUR_INTEGRATION_TOKEN_HERE'
});
```

Replace `YOUR_INTEGRATION_TOKEN_HERE` with your actual integration token from the Notion developer portal.
