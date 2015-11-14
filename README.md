# Drought City
Maybe cats


## Sample `.env` File

```
DJANGO_SECRET_KEY=seecrets
DJANGO_DEBUG=True
DATABASE_URL=postgres://postgres@localhost/drought
DJANGO_SESSION_COOKIE_SECURE=False
```

## Set up

```bash
$ vim .env
$ virtualenv venv
$ source venv/bin/activate
$ pip install -r requirements.txt
$ npm install
```

## Making it go

There are two parts to run, the client bundler (Webpack) and the server (Django). To run the server:

```bash
$ python ./manage.py runserver
```

to run the client bundler:

```bash
$ npm run watch
```
