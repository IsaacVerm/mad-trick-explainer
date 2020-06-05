# Run Cypress tests locally

These instructions assume the [application is running locally](../how-to/run-the-application-locally.md)

Tests can be run in two different modes:

- in the [Test Runner](https://docs.cypress.io/guides/core-concepts/test-runner.html) with [cypress open](https://docs.cypress.io/guides/guides/module-api.html#cypress-open)
- without Test Runner with [cypress run](https://docs.cypress.io/guides/guides/module-api.html#cypress-run)

These modes have some options which are relevant to both modes. One is the `--browser` option. Cypress' default browser is Electron. To be completely sure the test work in Chrome you can add the `--browser=chrome` flag.

## target local app

By default the app targeted is the `baseUrl` defined in the `cypress.json` file. This `baseUrl` is set to the app deployed on Firebase. To target the application running locally, you can either:

- change the `cypress.json` by putting `http://localhost:4200` as `baseUrl`
- override when running the tests by adding `--config baseUrl=http://localhost:4200`

`localhost:4200` is the default address used by `ng serve`. It's recommended to use the [command line override](https://docs.cypress.io/guides/references/configuration.html#Command-Line) since you want to avoid checking the `cypress.json` into version control with the wrong `baseUrl` set.

## run test

Either with the Test Runner:

```
npx cypress open
```

or without:

```
npx cypress run
```