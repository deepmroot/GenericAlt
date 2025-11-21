# Multi-stage build to produce a lean runtime image
FROM node:18-alpine AS build
WORKDIR /app

# 1. Accept the variable from the build system (Railway)
ARG VITE_N8N_FORM
ARG GEMINI_API_KEY

# 2. Expose it as an environment variable so Vite can see it during 'npm run build'
ENV VITE_N8N_FORM=$VITE_N8N_FORM
ENV GEMINI_API_KEY=$GEMINI_API_KEY

# Install dependencies and build static assets
COPY package.json ./
RUN npm install --legacy-peer-deps
COPY . ./

# Now the build will have access to process.env.VITE_N8N_FORM
RUN npm run build

FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# Install only production dependencies
COPY package.json ./
RUN npm install --omit=dev --legacy-peer-deps

# Copy the compiled frontend and server
COPY --from=build /app/dist ./dist
COPY server.js ./server.js
COPY api ./api
COPY db ./db
COPY utils ./utils

EXPOSE 3000
CMD ["node", "server.js"]
