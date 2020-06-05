# Change backend url

The url used by the frontend to reach the backend can be configurated at `mte/src/environments`. There are two separate environment files:

- `environment.prod.ts`
- `environment.ts`

This way you could for example serve the backend locally and use the deployed one in production.