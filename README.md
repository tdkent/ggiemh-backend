# Model Homes of the Golden Gate International Exposition, 1939-40

This documentation is for the **API server** of the content-driven website chronicling the history of the model homes built in the San Francisco Bay Area for the 1939-40 World's Fair.

## Tech Stack

- Language: TypeScript
- Framework: Express.js
- Database: MongoDB
- Lint &amp; Format: Biome w/Husky pre-commit
- Testing: Vitest
- Logging: Winston

## Routes

### Root

Health check route sends status code 200. Used by AWS Application Load Balancer (ALB) to monitor health of EC2 instances.

#### GET /

Response:

```
200 OK
```

### Homes

Query all model homes or a single home.

#### GET /homes

Response:

```
200 OK - A list of all homes
```