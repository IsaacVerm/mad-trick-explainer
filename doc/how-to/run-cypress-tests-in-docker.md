# Run Cypress tests in Docker

These instructions follows [this Cypress blog post](https://www.cypress.io/blog/2019/05/02/run-cypress-with-a-single-docker-command). 

## Run tests without Test Runner

### Against deployed application

```
docker run \
-v $PWD:/e2e \
-w /e2e \
cypress/included:4.7.0
```

The Docker image used is the `cypress/included` one which [contains all system dependencies and the Cypress test runner](https://github.com/cypress-io/cypress-docker-images). At the moment of writing `4.7.0` was the latest Cypress version available but feel free to use a more recent one as it becomes available.

`docker run` runs a process in a container. There's no need to download the `cypress/included` yourself. If it's not available, Docker will download it.

[docker run](https://docs.docker.com/engine/reference/run/) `-v` doesn't let you specify the root `/` as a folder in the container so we specify `e2e`. `-w` specifies the working directory which contains the tests.

### Against application running locally

```
docker run \
-v $PWD:/e2e \
-w /e2e \
-e CYPRESS_baseUrl=http://host.docker.internal:4200 \
cypress/included:4.7.0
```

As you can see the command is about the same as for running the tests against a deployed application. The difference is you have to override the `baseUrl` in the Docker way.

Note: while [running the application locally](run-the-application-locally.md), make sure `ng serve` is ran with the `--disable-host-check`. If not [webpack](https://webpack.js.org/concepts/) will throw an error saying the [host header is invalid](https://stackoverflow.com/questions/43619644/i-am-getting-an-invalid-host-header-message-when-running-my-react-app-in-a-we).

`localhost` in a Docker container is the `localhost` of that container, not the `localhost` of the host machine. To get access to the host machine, you should specify [host.docker.internal](https://glebbahmutov.com/blog/run-cypress-included-from-docker-container/). This Docker variable will point to `localhost` on the host machine.

## Run tests with Test Runner

These instructions add to the instructions for running the tests without Test Runner. Things get more tricky if you want access to the Test Runner in a Docker container. You have to forward the screen from the Docker container to your local machine using [X11](https://en.wikipedia.org/wiki/X_Window_System).

Disclaimer: it's rather unstable. When opening the `Chrome DevTools` the screen crashes quite often. According to [GitHub](https://github.com/XQuartz/xorg-server) the latest commit `XQuartz` commit happened in September 2016 so it's fair to say the project is not under active development. 

The following steps assume `XQuartz` has been installed as explained [here](../how-to/setup-local-environment.md) in the tests section.

### Add IP address local machine to list of allowed X11 hosts

By default forwarding is [not allowed](https://www.businessnewsdaily.com/11035-how-to-use-x11-forwarding.html) on Mac. You have to explicitly add the IP address of your local machine to the list of allowed X11 hosts:

```
IP=$(ipconfig getifaddr en0);
/usr/X11/bin/xhost + $IP;
```

A confirmation message is sent upon completion but you can also check yourself if the IP was properly set with `echo $IP`.

### Set `DISPLAY` variable

`DISPLAY=$IP:0`

The `IP` environment variable has already been set in the step just above.

### Run the tests

```
docker run \
  -v $PWD:/e2e \
  -v /tmp/.X11-unix:/tmp/.X11-unix \
  -w /e2e \
  -e DISPLAY \
  --entrypoint cypress \
  cypress/included:4.7.0 open --project .
```
Some of these arguments have already been discussed while explaining how to run the tests in Docker without Test Runner. Some other arguments are new:

- `-v /tmp/.X11-unix:/tmp/.X11-unix \`: use the X11 socket file
- `-e DISPLAY`
- `--entrypoint cypress {image} open --project`

[X11 uses a path to connect](https://unix.stackexchange.com/questions/196677/what-is-tmp-x11-unix) instead of an address and port so you have explicitly specify to use the X11 socket file.

The default entrypoint for the `cypress/include` image is `cypress run`. We want to debug with `cypress open` so the entrypoint has to be [overriden](https://github.com/cypress-io/cypress-docker-images/blob/master/included/README.md#entry). `--project .`  makes sure Cypress (which is installed globally) points to [the working directory specified](https://docs.cypress.io/guides/guides/command-line.html#cypress-open-project-lt-project-path-gt).
