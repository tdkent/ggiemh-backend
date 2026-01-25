# Model Homes of the Golden Gate International Exposition, 1939-40

This documentation is for the **API server** of the content-driven website chronicling the history of the model homes built in the San Francisco Bay Area for the 1939-40 World's Fair.

## Tech Stack

- Language: TypeScript
- Framework: Express.js
- Database: MongoDB
- Lint &amp; Format: Biome
- Testing: Vitest

## Routes

### Root

Health check route sends status code 200. Used by AWS Application Load Balancer (ALB) to monitor health of EC2 instances.

#### GET /

Response:

```
200 OK
```