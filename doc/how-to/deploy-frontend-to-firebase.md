# Deploy frontend to Firebase

This tutorial assumes you have a Google account. With a Google account, you automatically also have access to Firebase.

These instructions follow the [Angular documentation](https://angular.io/start/start-deployment#hosting-an-angular-app-on-firebase).

## create project in Firebase console

The console can be found [here](https://console.firebase.google.com/). You can pick any name you want, but I suggest `mad-trick-explainer` to be in line with the default project name used in CI and to be consistent with the repo name.

## add `@angular/fire` schematics

```
ng add @angular/fire
```

## deploy

```
ng deploy
```

The first time you'll have to select some options in the prompt but these options are self-explanatory.

