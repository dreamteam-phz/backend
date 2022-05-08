# BACKEND

## MongoDB database and express server.

Database is connected and served with an express server.

Development happens in dev branch.

## Technologies used

Built with:

- JS
- Nodejs
- Express
- MongoDB
- Postman

## Dependencies

1. Express will be used for the middleware to create various CRUD endpoints.
2. Mongoose for managing data in MongoDB using various queries.
3. Nodemon to restart our server every time we save our file.
4. Dotenv to manage a .env file.

## Setup and usage

### Install dependecies:

```shell
npm install
```

### Run the server:

```shell
npm start
```

Runs the server in the development mode in http://localhost:4000

### Open Postman and use post, get, update or delete data from the database.

## Testing

- installing Jest and superTest
- Created a separate start.js file to allow the test to run separately:
  - in index.js exported app.
  - in start.js requiring the app from index.js and the config.json and running the app in start.js
  - modifying the script in package.json `"start": "nodemon start.js", "test": "jest", "test:watch": "jest --watch"`
- Import the supertest method, which is a method to use our API.
- Adding the jest.config.js to resolve the creation of the server async issues: `module.exports = { testEnvironment: "node", verbose: true, forceExit: true, // clearMocks: true, };`
- Running the server by : `npm start` !!!
  **Important note**: `node index.js` doesn't run the server as the functionality has been migrated to `server.js`

## Sources

- freeCodeCamp: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/

## Authors and acknowledgment

Abel Parada

- [GitHub @abel-parada](https://github.com/abel-parada)
- [LinkedIn](https://www.linkedin.com/in/abelparadamillan/)

Oussama Bahri

- [GitHub @Oussama Bahri](https://github.com/Ouss84)
- [LinkedIn](https://www.linkedin.com/in/oussama-bahri/)
