# Creates a build of all files, the copies and runs only dist

# Build
FROM node:24-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Run
FROM node:24-alpine
WORKDIR /app
COPY --from=builder /app/package.json /app/package-lock.json ./
RUN npm install --omit=dev --ignore-scripts
COPY --from=builder ./app/dist ./dist
EXPOSE 3000
CMD ["node", "dist/server.js"]