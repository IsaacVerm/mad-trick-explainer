# Find out versions used

## Frontend

Get `Angular` version:

```
ng version | grep Angular
```

Get `TypeScript` version:

```
cat package.json | grep typescript
```

## Backend

These commands only make sense of the virtual environment is already activated.

Get `Python` version:

```
python --version
```

Get `Flask` version:

```
pip freeze | grep Flask==
```

`==` is added because you don't want to see version of other `Flask` plugins like for example `Flask-Cors`.