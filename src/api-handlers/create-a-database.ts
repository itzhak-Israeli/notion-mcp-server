/**
 * USE CASE 1: Hardcoded key directly tied to a single API
 *
 * API Handler: Create a Database
 * Operation ID: create-a-database
 * Endpoint: POST /v1/databases
 *
 * @api-endpoint /v1/databases
 * @api-method POST
 * @operation-id create-a-database
 *
 * Expected Behavior:
 * - The SSH key is detected in this file
 * - Posture gap is created ONLY for POST /v1/databases
 * - API schema includes: secret_SSH_Key: true
 */

// SSH Key used ONLY in this API handler for deployment
const DATABASE_DEPLOYMENT_SSH_KEY = `-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW
QyNTUxOQAAACDaGmWKa4JsXZ1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6pAAAAJgHjGw4B4x
sOAAAAAtzc2gtZWQyNTUxOQAAACDaGmWKa4JsXZ1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p
AAAAEDaGmWKa4JsXZ1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p2hplijCbF2dWtm9vOXnh
-----END OPENSSH PRIVATE KEY-----`;

/**
 * Create a new database
 */
export async function createDatabase(parentPageId: string, title: string) {
  const database = {
    parent: { page_id: parentPageId },
    title: [
      {
        type: "text",
        text: { content: title }
      }
    ],
    properties: {
      Name: {
        title: {}
      }
    }
  };

  const response = await fetch('https://api.notion.com/v1/databases', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Notion-Version': '2022-06-28'
    },
    body: JSON.stringify(database)
  });

  // Deploy database to production using SSH
  await deployDatabaseWithSSH(DATABASE_DEPLOYMENT_SSH_KEY);

  return response.json();
}

/**
 * Deploy database using SSH key
 */
async function deployDatabaseWithSSH(sshKey: string) {
  console.log('Deploying database with SSH key...');
  // Deployment logic here
}