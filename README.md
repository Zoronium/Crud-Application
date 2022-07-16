# RESTturant - A CRUD REST api Project

## This project is a simple CRUD REST API project

### this project is consists of :-

more on them in there links
[BackEnd DJANGO](./restaurant-api/README.md)

more on them in there links
[FrontEnd React.js](./restaurant-menu-front/README.md)

## click here for installation ➡ [Installation](#installations)

#### CRUD -CREATE , READ , UPDATE AND DELETE

In computer programming, create, read, update, and delete are the four basic operations of persistent storage.

#### REST

Representational state transfer is a software architectural style that describes a uniform interface between decoupled components in the Internet in a Client-Server architecture

#### API

Application Programming Interface, which is a software intermediary that allows two applications to talk to each other.

## INSTALLATIONS

1. For Django-Backend API server

   1. Firstly Add a .env file as its needed by the Docker use [.env.sample](./restaurant-api/.env.sample)

   ```bash
   cd restaurant-api/
   touch .env
   cat .env.sample >> .env
   ```

   2. You can use the docker compose command to fire up a container
      below cmd 👇🏻

   ```bash
   docker compose -f "restaurant-api\docker-compose.yaml" up -d --build
   ```

   3. Standalone test server for testing or small production
      for virtual enviorment

   ```bash
   cd restaurant-api/
   python3 -m venv .venv
   source ./venv/bin/activate
   ```

   install and runing server

   ```bash
   pip install --upgrade pip
   pip install --no-cache-dir -r requirements.txt
   python3 manage.py makemigrations
   python3 manage.py migrate
   python3 manage.py runserver
   ```

2. For Front end Devlopment

   1. use Docker to get the best and error free install

   ```bash
   docker compose -f "restaurant-menu-front\docker-compose.yaml" up -d --build
   ```

   1. for testing and small props.

   ```bash
   npm i
   npm start
   ```
