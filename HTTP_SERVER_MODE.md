# HTTP Server Mode Documentation

This MCP server **SUPPORTS BOTH STDIO AND HTTP TRANSPORTS**.

## HTTP Transport Features

### Starting in HTTP Mode
```bash
# Run as HTTP server on port 3000 (default)
notion-mcp-server --transport http

# Run on custom port
notion-mcp-server --transport http --port 8080

# With authentication token
notion-mcp-server --transport http --auth-token mySecretToken
```

### HTTP Endpoints Exposed

When running in HTTP mode, the server exposes these endpoints:

1. **POST /mcp** - Client-to-server JSON-RPC communication
2. **GET /mcp** - Server-to-client notifications (Streamable HTTP/SSE)
3. **DELETE /mcp** - Session termination
4. **GET /health** - Health check endpoint (no auth required)

### Transport Implementation
- Uses `StreamableHTTPServerTransport` from `@modelcontextprotocol/sdk`
- Express.js server with `app.listen()` on configurable port
- Bearer token authentication for /mcp routes
- Session management with MCP session IDs

### Example HTTP Usage

```bash
# Start server
notion-mcp-server --transport http --port 3000 --auth-token abc123

# Health check
curl http://localhost:3000/health

# MCP request with auth
curl -X POST http://localhost:3000/mcp \
  -H "Authorization: Bearer abc123" \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "initialize", "params": {...}}'
```

## Key Code Locations

- HTTP server setup: `scripts/start-server.ts` lines 74-233
- Express app configuration: Line 76
- Server listening: Line 218 `app.listen(port, '0.0.0.0')`
- StreamableHTTPServerTransport: Lines 146-147

## THIS IS NOT A STDIO-ONLY SERVER

This server provides **full HTTP-based MCP transport** capabilities alongside stdio support.