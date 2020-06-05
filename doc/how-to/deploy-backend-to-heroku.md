# Deploy backend to Heroku

These instructions follow [this tutorial](https://stackabuse.com/deploying-a-flask-application-to-heroku/).

## Create a Heroku account

Sign up [here](https://signup.heroku.com/).

## Install Heroku CLI

Installation instructions can be found [here](https://devcenter.heroku.com/articles/heroku-cli#download-and-install).

## Create Heroku app

```
heroku create mte-backend
```

## Login to Heroku

```
heroku login -i
```

Fill in your credentials.

## Add a Heroku remote

[Adding a remote](https://devcenter.heroku.com/articles/git#for-an-existing-heroku-app) means we'll push our Git repository to somewhere else than GitHub. To add a Heroku remote:

```
heroku git:remote -a mte-backend
```

It's important the remote name matches the app name we created earlier.

## Push your code to the Heroku remote

```
git subtree push --prefix backend heroku master
```

We use a monorepo so the `backend` part with the `Procfile` isn't in the root of the repo. To solve this you can use [git subtree](https://coderwall.com/p/ssxp5q/heroku-deployment-without-the-app-being-at-the-repo-root-in-a-subfolder).