# What makes deploying the frontend in CI different?

[This how-to](./../how-to/deploy-frontend-to-firebase.md) shows how to deploy the frontend app to Firebase on your own machine. In that how-to you're prompted to login interactively by the `ng deploy` command. Of course we can't do the same on CI since the whole point is to automate this part.

The solution to this to create a Firebase token. If we [pass this token to GitHub](../how-to/add-firebase-token-to-github-secrets.md), Firebase will trust GitHub enough to let it deploy.



