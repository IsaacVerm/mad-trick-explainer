# Run the application locally

These instructions assume your [local environment has been set up](setup-local-environment.md).

## Frontend

Change directory:

```
cd mte
```

Use the development server

```
ng serve
```

By default this serves on `localhost:4200` and I don't deviate from this.

## Backend

Change directory:

```
cd backend
```

Define the Flask application:

```
export FLASK_APP=backend.py
```

Activate the virtual environment.

```
source venv/bin/activate
```

Run the Flask app:

```
flask run --cert=adhoc;
```

The `--cert=adhoc` flag is [important](https://blog.miguelgrinberg.com/post/running-your-flask-application-over-https), it means we're using `https`.