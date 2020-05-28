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

If you want to run the Cypress tests in debug mode, you also have to install [XQuartz](https://www.xquartz.org/). It's important to note you have to [enable network connections](https://gist.github.com/cschiewek/246a244ba23da8b9f0e7b11a68bf3285) in `XQuartz`.

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

### headless mode

Tests can be run using Docker as explained in [this post](https://www.cypress.io/blog/2019/05/02/run-cypress-with-a-single-docker-command). The Docker image used is the `cypress/included` one which [contains all system dependencies and the Cypress test runner](https://github.com/cypress-io/cypress-docker-images).

Cypress itself runs in a Docker container but the web app and backend are hosted locally. You still have to launch them yourself before launching the container.

Make sure `ng serve` is ran with the `--disable-host-check`. If not [webpack](https://webpack.js.org/concepts/) will throw an error saying the [host header is invalid](https://stackoverflow.com/questions/43619644/i-am-getting-an-invalid-host-header-message-when-running-my-react-app-in-a-we).

By default the `baseUrl` in `cypress.json` points to `localhost`. This won't do when your tests are running in a container. Solution is to [override localhost](https://glebbahmutov.com/blog/run-cypress-included-from-docker-container/) when running the container and specify `host.docker.internal`. This will points to the web app running locally.

To run the tests:

```
docker run \
-v $PWD:/e2e \
-w /e2e \
-e CYPRESS_baseUrl=http://host.docker.internal:4200 \
cypress/included:4.7.0
```

`docker run` runs a process in a container. There's no need to download the `cypress/included` yourself. If it's not available, Docker will download it.

[docker run](https://docs.docker.com/engine/reference/run/) `-v` doesn't let you specify the root `/` as a folder in the container so we specify `e2e`. `-w` specifies the working directory which contains the tests. The `CYPRESS_baseUrl` environment variable is the port used by default by `ng serve`. At the moment of writing `4.7.0` was the latest Cypress version available. Of course you can parametrize these as you want.

At the moment tests hitting the Flask API still fail. To see exactly why I should first enable debug mode to be able to see exactly what's going on in the browser console.

### debug mode

To be able to debug you have to forward the screen from the Docker container to your local machine using [X11](https://en.wikipedia.org/wiki/X_Window_System).

By default forwarding is [not allowed](https://www.businessnewsdaily.com/11035-how-to-use-x11-forwarding.html) on Mac. You have to explicitly add the IP address of your local machine to the list of allowed X11 hosts:

```
IP=$(ipconfig getifaddr en0);
/usr/X11/bin/xhost + $IP;
```

A confirmation message is sent upon completion but you can also check yourself if the IP was properly set with `echo $IP`.

Now the first thing to do is to set the `DISPLAY` variable with `DISPLAY=$IP:0`.

Next to exporting the `DISPLAY` environment variable, to run in debug mode you also have to add some more arguments in comparison with headless mode:

- `-v /tmp/.X11-unix:/tmp/.X11-unix \`: use the X11 socket file
- `-e DISPLAY`
- `--entrypoint cypress {image} open --project`

[X11 uses a path to connect](https://unix.stackexchange.com/questions/196677/what-is-tmp-x11-unix) instead of an address and port.

I checked the `cypress/include` images [README](https://github.com/cypress-io/cypress-docker-images/blob/master/included/README.md) and Dockerfile but couldn't trace down where the `DISPLAY` environment variable is used exactly.

The default entrypoint for the `cypress/include` image is `cypress run`. We want to debug with `cypress open` so the entrypoint has to be [overriden](https://github.com/cypress-io/cypress-docker-images/blob/master/included/README.md#entry). `--project .`  makes sure Cypress (which is installed globally) points to [the working directory specified](https://docs.cypress.io/guides/guides/command-line.html#cypress-open-project-lt-project-path-gt).

Putting it all together, the following command runs the tests in debug mode with the basic configuration of the apps:

```
docker run \
  -v $PWD:/e2e \
  -v /tmp/.X11-unix:/tmp/.X11-unix \
  -w /e2e \
  -e DISPLAY \
  -e CYPRESS_baseUrl=http://host.docker.internal:4200 \
  --entrypoint cypress \
  cypress/included:4.7.0 open --project .
```

It's very unstable. When opening the `Chrome DevTools` the screen crashes more often than not. According to [GitHub](https://github.com/XQuartz/xorg-server) the latest commit happend in September 2016 so it's fair to say the project is not under active development. 

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


