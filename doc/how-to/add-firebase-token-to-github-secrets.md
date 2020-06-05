# Add Firebase token to GitHub secrets

Instructions are based on [this tutorial](https://dev.to/gautemeekolsen/getting-started-with-github-actions-ci-cd-firebase-deploy-5g87).

## Install Firebase CLI

```
npm install -g firebase-tools
```

## Generate token

```
firebase login:ci
```

Copy the token generated.

## Pass token to GitHub

In the `settings > secrets` section of the repository itself (so not in your profile page) you can define a secret environment variables. Set the `FIREBASE_TOKEN` to the token just copied.