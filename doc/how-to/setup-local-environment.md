# Setup local environment

## Frontend

### Install `node`, `ng` and `ng`

Instructions how to install these won't be repeated here since they're already covered in the [official Angular documentation](https://angular.io/guide/setup-local).

### Install packages

Change directory to the frontend `mte`:

```
cd mte
```

Install:

```
npm install
```

## Backend

### Install Python 3

Mac OS X comes with Python 2 but NOT Python 3. Install Python 3 from [here](https://www.python.org/downloads/).

### Create virtual environment

This is covered at the right level of detail by the [official documentation](https://docs.python.org/3/tutorial/venv.html).

Change directory to the backend:

```
cd backend
```

Now create the virtual environment.

```
python3 -m venv venv
```

The `-m` flag means the `python3` command is run as a script. The first `venv` is the Python module creating the virtual environment. The last `venv` is the name we give our virtual environment. You can pick anything you want there.

### Activate virtual environment

```
source venv/bin/activate;
```

Run `python --version` to check the Python version. Since the default version used in Mac OS X is 2, if you see `3.x.x` here, it means the virtual environment is activated.

### Install packages in virtual environment

```
pip install -r requirements.txt
```

The `-r` flag means a requirements file is specified.

## Tests

This is optional but if you want to run the Cypress tests in debug mode in a Docker container, you also have to install [XQuartz](https://www.xquartz.org/). It's important to note you have to [enable network connections](https://gist.github.com/cschiewek/246a244ba23da8b9f0e7b11a68bf3285) in `XQuartz`.