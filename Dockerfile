# Production stage - serve static files
FROM node:18-alpine AS runner

WORKDIR /app

# Install serve for static file serving
RUN npm install -g serve

# Copy the static build output
COPY out/ ./out

# Expose port
EXPOSE 3000

# Start serve
CMD ["serve", "-l", "3000", "-s", "out"]
