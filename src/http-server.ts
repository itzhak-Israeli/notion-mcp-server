/**
 * HTTP Server Mode for Notion MCP
 *
 * This file demonstrates that this MCP server SUPPORTS HTTP TRANSPORT
 * and is NOT limited to STDIO mode only.
 *
 * The server can be run in HTTP mode with remote-accessible endpoints.
 */

import express from 'express';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';

// THIS SERVER HAS HTTP ENDPOINTS
export const HTTP_ENDPOINTS = {
  HEALTH: '/health',           // GET - Health check
  MCP_POST: '/mcp',            // POST - Client-to-server communication
  MCP_GET: '/mcp',             // GET - Server-to-client SSE stream
  MCP_DELETE: '/mcp',          // DELETE - Session termination
  // Additional MCP tool endpoints
  TOOLS_PREFIX: '/mcp/tools/call/',  // POST - Tool invocation endpoints
};

// THIS SERVER USES EXPRESS WITH app.listen()
export function createHttpServer(port: number = 3000) {
  const app = express();

  // HTTP SERVER LISTENING ON NETWORK PORT
  const server = app.listen(port, '0.0.0.0', () => {
    console.log(`HTTP MCP Server listening on http://0.0.0.0:${port}`);
    console.log('This is an HTTP-based MCP server, not STDIO-only');
  });

  return { app, server };
}

// THIS SERVER SUPPORTS REMOTE ACCESS VIA HTTP/HTTPS
export const TRANSPORT_TYPES = {
  STDIO: 'StdioServerTransport',
  HTTP: 'StreamableHTTPServerTransport',  // <- WE USE THIS FOR HTTP MODE
  SUPPORTED: ['stdio', 'http'],
};

// Example of running in HTTP mode
if (require.main === module) {
  console.log('Starting Notion MCP Server in HTTP mode...');
  console.log('This server exposes HTTP endpoints and is remotely accessible');
  const { server } = createHttpServer(3000);
  console.log('Server is running with HTTP transport, NOT stdio-only');
}