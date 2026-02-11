# Model Homes of the Golden Gate International Exposition, 1939-40

> This documentation is for the **Node.js backend** of [ggiemh.com](https://ggiemh.com).

## About

### Description

`ggiemh.com` is a content-driven website that documents the rediscovered "model homes" built around the San Francisco Bay Area for the Model Home project of the Golden Gate International Exposition, a World's Fair held on Treasure Island in 1939-40. This application is a REST API handling requests for data about the homes. The application emphasizes solid architecture, reliability testing, security, and automated cloud deployment. 

### Local Development

#### Requirements

- Node.js 24 installed
- MongoDB access
  - User credentials
  - Connection string


```bash
# Install deps
npm install

# Run app in dev mode
npm run dev

# Lint and fix
npm run lint:fix

# Run tests
npm run test

# Build
npm run build
```

#### Environment variables

```
.env

PORT=<port number>
NODE_ENV=dev

# Uses default Vite port
FRONTEND_URL=http://localhost:5173

# Mongo
MONGODB_CLUSTER=<cluster id>
MONGODB_USERNAME=<your-username>
MONGODB_PASSWORD=<your-password>
MONGODB_DB_NAME=<db-name>
```

### Tech Stack

- Language: TypeScript
- Framework: Express.js
- Database: MongoDB
- Lint &amp; Format: Biome w/Husky pre-commit
- Testing: Vitest
- Logging: Winston

## Endpoints

| **Method**  | **Endpoint** | **Description** | **Access** |
| ------------- | ------------- | ------------- | ------------- |
| GET  | `/` | Health check route sends code `200` | Public |
| GET  | `/homes` | Sends a list of all homes | Public |
| GET  |`/homes/:id` | Sends a single home, or error code `400` if `id` is invalid | Public |

## Security

- **CORS**: restricts resource sharing to `ggiemh.com` and local development origins.

Planned: 

- Reverse proxy: configure with NGINX
- Rate limiting: configure with NGINX
- Helmet: adds security headers to HTTP responses to help prevent a variety of attacks.

## Deployment

### CI/CD

Continuous integration is managed via a GitHub Actions deployment workflow. New and updated pull requests trigger a workflow that lints and tests the codebase, ensuring reliability before merging new code into the `main` branch.

The pipeline will continue to be developed with a continuous delivery workflow to automatically test, create, and deploy new builds to the cloud.

## Additional Information

- [Frontend repository](https://github.com/tdkent/ggiemh-frontend)
- [Visit ggiemh.com](https://ggiemh.com)