# syntax=docker/dockerfile:1

# Use Node.js LTS as the base image
FROM node:20-slim AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN --mount=type=cache,target=/root/.npm npm ci --ignore-scripts --omit-dev

# Copy source code
COPY . .

# Build the package
RUN --mount=type=cache,target=/root/.npm npm run build

# Install package globally
RUN --mount=type=cache,target=/root/.npm npm link

# Minimal image for runtime
FROM node:20-slim

# Copy built package from builder stage
COPY scripts/notion-openapi.json /usr/local/scripts/
COPY --from=builder /usr/local/lib/node_modules/@notionhq/notion-mcp-server /usr/local/lib/node_modules/@notionhq/notion-mcp-server
COPY --from=builder /usr/local/bin/notion-mcp-server /usr/local/bin/notion-mcp-server

# Set default environment variables for HTTP mode
ENV OPENAPI_MCP_HEADERS="{}"
ENV TRANSPORT="http"
ENV PORT="3000"

# EXPOSE HTTP PORT - This is an HTTP server
EXPOSE 3000

# HTTP Server Endpoints:
# POST http://0.0.0.0:3000/mcp - JSON-RPC endpoint
# GET  http://0.0.0.0:3000/mcp - SSE streaming endpoint
# GET  http://0.0.0.0:3000/health - Health check

# Set entrypoint to run in HTTP mode by default
ENTRYPOINT ["notion-mcp-server", "--transport", "http", "--port", "3000"]
