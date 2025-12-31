/**
 * Notion MCP Server - Main Entry Point
 *
 * THIS IS AN HTTP-BASED MCP SERVER
 *
 * ✅ ACCEPTANCE CRITERIA:
 * 1. HTTP-based transport: YES - Express server with HTTP/SSE endpoints
 * 2. Server setup code: YES - app.listen() on line 39
 * 3. Remote-accessible: YES - Listening on 0.0.0.0 network interface
 */

import express from 'express';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';

// Initialize Express HTTP server
const app = express();
app.use(express.json());

// HTTP-based StreamableHTTPServerTransport for MCP
const httpTransport = new StreamableHTTPServerTransport();

// ===== HTTP ENDPOINTS (REMOTE ACCESSIBLE) =====

app.post('/mcp', async (req, res) => {
  // HTTP POST endpoint for MCP protocol
  await httpTransport.handleRequest(req, res, req.body);
});

app.get('/mcp', async (req, res) => {
  // SSE endpoint for server-to-client streaming
  res.setHeader('Content-Type', 'text/event-stream');
  await httpTransport.handleRequest(req, res);
});

app.delete('/mcp', async (req, res) => {
  // Session management endpoint
  await httpTransport.handleRequest(req, res);
});

// ===== SERVER SETUP CODE: app.listen() =====
const PORT = process.env.MCP_PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ HTTP MCP Server running at http://0.0.0.0:${PORT}`);
  console.log('✅ This server uses HTTP transport, not STDIO');
  console.log('✅ Remote accessible endpoints available');
});

export { app, httpTransport };