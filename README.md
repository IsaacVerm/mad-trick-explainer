# mad-trick-explainer

A magician never reveals his secrets but this web app does exactly that.

## Prototypes

Planning on at first 4 prototypes:

1) show tricks by magician
2) have a detail page per magician
3) fetch some tricks (e.g. from Wikipedia)
4) let the user add his own magician

This roughly follows the [try it Angular tutorial](https://angular.io/start).

## Scaffolding

Make sure to have `node`, `npm` and `ng` [installed](https://angular.io/guide/setup-local).

Run `ng new mte`.

Serve with `ng serve` (from within the app).

Generate new component with `ng generate component`.

## Tests

To run Cypress tests in debug mode: `npx cypress open`.
To run the same tests without debugger: `npx cypress run --browser=chrome`. 

In both cases make sure the application is running (`ng serve`).

Tests are divided by component. For example there are `magician-list.spec.js` and `trick-list.spec.js` test files because there are also `magician-list` and `trick-list` components.

## Backend

The backend is provided by [Flask](https://github.com/typicode/json-server). It's just used to have something to do with the `HttpClientModule`.

To run the server:

```
cd backend;
export FLASK_APP=magician-names.py;
flask run --cert=adhoc;
```

The `--cert=adhoc` flag is [important](https://blog.miguelgrinberg.com/post/running-your-flask-application-over-https), it means we're using `https`.

[CORS] has been enabled.

## Material design

Using Material design turned out to be real easy. Just reading the [getting started](https://material.angular.io/guide/getting-started) guide is sufficient to get up and running.

## Debugging

There's a handy tool to debug an Angular app called [Augury](https://augury.rangle.io/).

## Questions

Open questions are logged in the GitHub issues section.

## Content of the app

Tricks were taken from [Wikipedia](https://en.wikipedia.org/wiki/List_of_magic_tricks) or [here](https://arresteddevelopment.fandom.com/wiki/G.O.B.%27s_illusions) in case of G.O.B.
