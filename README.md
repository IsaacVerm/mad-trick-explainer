# mad-trick-explainer

A magician never reveals his secrets but this web app does exactly that.

## Data sources

Tricks were taken from [Wikipedia](https://en.wikipedia.org/wiki/List_of_magic_tricks) or [here](https://arresteddevelopment.fandom.com/wiki/G.O.B.%27s_illusions) in case of G.O.B.

## Architecture

Frontend built with [Angular](https://angular.io/) using [Typescript](https://www.typescriptlang.org/), backend built with [Flask](https://flask.palletsprojects.com/en/1.1.x/) in Python.

## Prototypes

I'm planning on building multiple prototypes. In each prototype I try to use something new Angular offers. The first prototypes roughly follow the [try it Angular tutorial](https://angular.io/start).

1) show tricks by magician ([components](https://angular.io/guide/architecture-components))
2) detail page per magician (components)
3) fetch some tricks ([backend](https://angular.io/guide/http#setup-for-server-communication) and [services](https://angular.io/guide/architecture-services))
4) add your own magician

## Setup

To run the web app yourself these requirements need to be fulfilled:

- `node`, `npm` and `ng` are [installed](https://angular.io/guide/setup-local)
- Javascript packages (`node_modules`) are installed
- Python packages are installed

Install Javascript packages:

```
cd mte/src;
npm install;
```

Install Python packages:

```
cd backend;
pip install -r requirements.txt
```

## Configuration

Configuration can be found in the `backend/config.py` file. This configuration is shared with the web app and Cypress tests using the `/config` route.

The only exception to this is the `apiUrl` defined in `src/environments` in the Angular app. You somehow need to [specify](https://angular.io/guide/build) where to find the `/config` route.

## Run the application

Run the Angular frontend:

```
ng serve
```

Run the Flask backend:

```
cd backend;
export FLASK_APP=backend.py;
source venv/bin/activate;
flask run --cert=adhoc;
```

The `--cert=adhoc` flag is [important](https://blog.miguelgrinberg.com/post/running-your-flask-application-over-https), it means we're using `https`.

## Tests

The only tests are E2E tests written in Cypress, there are no component or service tests.

Tests can be ran in two modes:

- debug mode: `npx cypress open`
- headless: `npx cypress run`

Cypress' default browser is Electron. To be completely sure the test work in Chrome you can add the `--browser=chrome` flag to `cypress run`. 

Tests are divided by component. For example there are `magician-list.spec.js` and `trick-list.spec.js` test files because there are also `magician-list` and `trick-list` components.

### Docker

Tests can be run using Docker as explained in [this post](https://www.cypress.io/blog/2019/05/02/run-cypress-with-a-single-docker-command).

## Backend

The backend is not the focus of this project. I chose Flask just to have something up and running quickly so I'd be able to play around with the Angular `HttpClientModule`.

[CORS](https://flask-cors.readthedocs.io/en/latest/) has been enabled.

## Frontend

### Material design

To make everything a bit more shiny out of the box, [Material design](https://material.io/design/) is used. Just reading this [getting started](https://material.angular.io/guide/getting-started) guide is more than enough at the beginning.

## Debugging

There's a handy tool to debug an Angular app called [Augury](https://augury.rangle.io/).

## Questions

Open questions are logged in the GitHub issues section.


