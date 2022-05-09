# BACKEND

## Technologies used

The project uses [MERN Stack](https://www.mongodb.com/mern-stack).

1. [MongoDB](https://www.mongodb.com/) - document database
2. [Express(.js)](https://expressjs.com/) - Node.js web framework
3. [React(.js)](https://reactjs.org/) - a client-side JavaScript framework
4. [Node(.js)](https://nodejs.org/en/) - the premier JavaScript web server

## BACKEND: MongoDB database and express server.

Database is connected and served with express.

## Dependencies

1. Express will be used for the middleware to create various CRUD endpoints.
2. Mongoose for managing data in MongoDB using various queries.
3. Nodemon to restart our server every time we save our file.
4. Dotenv to manage a .env file.

## Setup and usage

### 1. Setting your database in MongoDB

Go to [MongoDB](https://www.mongodb.com/) and create an account.

If it's your first time, follow the wizard to create a database in your organization's atlas.

Once database is created, we suggest to connect to it using Compass (install it if needed). Copy the connection string.

#### Create the `.env` file in the root folder

Insert the connection string in the `.env`.

**Example**

```shell
DATABASE_URL = mongodb+srv://<username>:<password>@cluster0.zb86f.mongodb.net/<database>
```

Where

`<username>` is your database user,
`<password>` is your database user-password,
& `<database>` is the db of your choice.

### 2. Install project dependecies:

In the backend root folder, run

```shell
npm install
```

### 3. Run the server:

In the backend root folder, run

```shell
npm start
```

Runs the server in the development mode in http://localhost:4000

## Screenshots

![alt text](/Images/main.png) "Main menu displayed in Database"

## Authors and acknowledgment

| Developers       | GitHub                                         | LinkedIn                                                           |
| ---------------- | ---------------------------------------------- | ------------------------------------------------------------------ |
| Abel Parada      | [@abel-parada](https://github.com/abel-parada) | [@abelparadamillan](https://www.linkedin.com/in/abelparadamillan/) |
| Sergei Ainozerov | [@ainozerie](https://github.com/ainozerie)     | [@ainozerie](https://www.linkedin.com/in/ainozerie/)               |
| Saara Leppihalme | [@SaaraLeppis](https://github.com/SaaraLeppis) | [@saara-leppihalme](https://www.linkedin.com/in/saara-leppihalme/) |
| Oussama Bahri    | [@Ouss84](https://github.com/Ouss84)           | [@oussama-bahri](https://www.linkedin.com/in/oussama-bahri/)       |
