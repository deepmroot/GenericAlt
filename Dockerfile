# Multi-stage build to produce a lean runtime image
FROM node:18-alpine AS build
WORKDIR /app

# Install dependencies and build static assets
COPY package.json ./
RUN npm install --legacy-peer-deps
COPY . ./
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

EXPOSE 3000
CMD ["node", "server.js"]
